import ThreeWorld from '@/utils/ThreeWorld';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import type { World } from 'cannon-es';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils';

export interface DiceSettings {
  numOfDice: number;
  segments: number;
  edgeRadius: number;
  notchRadius: number;
  notchDepth: number;
}

interface DiceType {
  mesh: THREE.Group;
  body: CANNON.Body;
}

type ListenerType = Map<string, ((v?: number) => void)[]>;

class DiceWorld extends ThreeWorld {
  physicsWorld: World;
  diceArray: any[];
  settings: DiceSettings;
  listeners: ListenerType = new Map();
  count: number = 0;

  constructor(opt: any) {
    const { diceSettings, ...rest } = opt;
    super(rest);
    this.settings = diceSettings || {
      numOfDice: 2, // initial number
      segments: 40,
      edgeRadius: 0.1,
      notchRadius: 0.15,
      notchDepth: 0.09,
    };
    this.physicsWorld = this.createPhysics();
    this.diceArray = [];
  }

  init(canvasEl: HTMLCanvasElement) {
    this.createRender(canvasEl);
    const camera = this.createCamera([
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    ]);
    this.createLight();
    this.createFloor();
    this.changeDiceCount(this.settings.numOfDice);
    this.throwDice();
    this.render(camera);
  }

  // update the number of dice
  changeDiceCount(num: number) {
    const diceMesh: THREE.Group = this._createDiceMesh();
    const curLen = this.diceArray.length;
    if (curLen === num) return;
    if (curLen < num) {
      for (let i = 0; i < num - curLen; i += 1) {
        const dice = this.createDice(diceMesh);
        this.diceArray.push(dice);
        this._addDiceEvents(dice);
      }
    } else {
      for (let i = 0; i < curLen - num; i += 1) {
        const d = this.diceArray.pop();
        this.disposeGroup(d.mesh);
        this.physicsWorld.removeBody(d.body);
      }
    }
  }

  on(t: string, cb: (v: number) => void) {
    let old: any[] = [];
    if (this.listeners.has(t)) {
      old = this.listeners.get(t)!;
    }
    this.listeners.set(t, [...old, cb]);
  }

  createLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    const topLight = new THREE.PointLight(0xffffff, 0.5);
    topLight.position.set(10, 15, 3);
    topLight.castShadow = true;
    topLight.shadow.mapSize.width = 2048;
    topLight.shadow.mapSize.height = 2048;
    topLight.shadow.camera.near = 5;
    topLight.shadow.camera.far = 400;
    this.scene.add(ambientLight);
    this.scene.add(topLight);
  }

  createFloor() {
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(1000, 1000),
      new THREE.ShadowMaterial({
        opacity: 0.15,
      })
    );
    floor.receiveShadow = true;
    floor.position.y = 0;
    floor.quaternion.setFromAxisAngle(
      new THREE.Vector3(-1, 0, 0),
      Math.PI * 0.5
    );
    this.scene.add(floor);

    const floorBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane(),
    });
    const pos = new CANNON.Vec3(
      floor.position.x,
      floor.position.y,
      floor.position.z
    );
    floorBody.position.copy(pos);
    const qua = new CANNON.Quaternion(
      floor.quaternion.x,
      floor.quaternion.y,
      floor.quaternion.z,
      floor.quaternion.w
    );
    floorBody.quaternion.copy(qua);
    this.physicsWorld.addBody(floorBody);
  }

  createDice(diceMesh: THREE.Group): DiceType {
    const mesh = diceMesh.clone();
    this.scene.add(mesh);
    const body = new CANNON.Body({
      mass: 0.3,
      shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
      sleepTimeLimit: 0.02,
    });
    this.physicsWorld.addBody(body);
    return { mesh, body };
  }

  private _createDiceMesh() {
    const boxMaterialOuter = new THREE.MeshStandardMaterial({
      color: 0xffffff,
    });
    const boxMaterialInner = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0,
      metalness: 1,
      side: THREE.DoubleSide,
    });

    const diceMesh = new THREE.Group();
    const innerMesh = new THREE.Mesh(
      this._createInnerGeometry(),
      boxMaterialInner
    );
    const outerMesh = new THREE.Mesh(
      this._createBoxGeometry(),
      boxMaterialOuter
    );
    outerMesh.castShadow = true;
    diceMesh.add(innerMesh, outerMesh);

    return diceMesh;
  }

  private _createBoxGeometry() {
    const { segments, edgeRadius, notchRadius, notchDepth } = this.settings;

    let boxGeometry = new THREE.BoxGeometry(
      1,
      1,
      1,
      segments,
      segments,
      segments
    );

    const positionAttr = boxGeometry.attributes.position;
    const subCubeHalfSize = 0.5 - edgeRadius;

    for (let i = 0; i < positionAttr.count; i++) {
      let position = new THREE.Vector3().fromBufferAttribute(positionAttr, i);

      const subCube = new THREE.Vector3(
        Math.sign(position.x),
        Math.sign(position.y),
        Math.sign(position.z)
      ).multiplyScalar(subCubeHalfSize);
      const addition = new THREE.Vector3().subVectors(position, subCube);

      if (
        Math.abs(position.x) > subCubeHalfSize &&
        Math.abs(position.y) > subCubeHalfSize &&
        Math.abs(position.z) > subCubeHalfSize
      ) {
        addition.normalize().multiplyScalar(edgeRadius);
        position = subCube.add(addition);
      } else if (
        Math.abs(position.x) > subCubeHalfSize &&
        Math.abs(position.y) > subCubeHalfSize
      ) {
        addition.z = 0;
        addition.normalize().multiplyScalar(edgeRadius);
        position.x = subCube.x + addition.x;
        position.y = subCube.y + addition.y;
      } else if (
        Math.abs(position.x) > subCubeHalfSize &&
        Math.abs(position.z) > subCubeHalfSize
      ) {
        addition.y = 0;
        addition.normalize().multiplyScalar(edgeRadius);
        position.x = subCube.x + addition.x;
        position.z = subCube.z + addition.z;
      } else if (
        Math.abs(position.y) > subCubeHalfSize &&
        Math.abs(position.z) > subCubeHalfSize
      ) {
        addition.x = 0;
        addition.normalize().multiplyScalar(edgeRadius);
        position.y = subCube.y + addition.y;
        position.z = subCube.z + addition.z;
      }

      const notchWave = (v: number) => {
        v = (1 / notchRadius) * v;
        v = Math.PI * Math.max(-1, Math.min(1, v));
        return notchDepth * (Math.cos(v) + 1);
      };
      const notch = (pos: number[]) => notchWave(pos[0]) * notchWave(pos[1]);

      const offset = 0.23;

      if (position.y === 0.5) {
        position.y -= notch([position.x, position.z]);
      } else if (position.x === 0.5) {
        position.x -= notch([position.y + offset, position.z + offset]);
        position.x -= notch([position.y - offset, position.z - offset]);
      } else if (position.z === 0.5) {
        position.z -= notch([position.x - offset, position.y + offset]);
        position.z -= notch([position.x, position.y]);
        position.z -= notch([position.x + offset, position.y - offset]);
      } else if (position.z === -0.5) {
        position.z += notch([position.x + offset, position.y + offset]);
        position.z += notch([position.x + offset, position.y - offset]);
        position.z += notch([position.x - offset, position.y + offset]);
        position.z += notch([position.x - offset, position.y - offset]);
      } else if (position.x === -0.5) {
        position.x += notch([position.y + offset, position.z + offset]);
        position.x += notch([position.y + offset, position.z - offset]);
        position.x += notch([position.y, position.z]);
        position.x += notch([position.y - offset, position.z + offset]);
        position.x += notch([position.y - offset, position.z - offset]);
      } else if (position.y === -0.5) {
        position.y += notch([position.x + offset, position.z + offset]);
        position.y += notch([position.x + offset, position.z]);
        position.y += notch([position.x + offset, position.z - offset]);
        position.y += notch([position.x - offset, position.z + offset]);
        position.y += notch([position.x - offset, position.z]);
        position.y += notch([position.x - offset, position.z - offset]);
      }

      positionAttr.setXYZ(i, position.x, position.y, position.z);
    }

    boxGeometry.deleteAttribute('normal');
    boxGeometry.deleteAttribute('uv');
    const newBoxGeometry = BufferGeometryUtils.mergeVertices(boxGeometry);
    newBoxGeometry.computeVertexNormals();
    return newBoxGeometry;
  }

  private _createInnerGeometry() {
    const baseGeometry = new THREE.PlaneGeometry(
      1 - 2 * this.settings.edgeRadius,
      1 - 2 * this.settings.edgeRadius
    );
    const offset = 0.48;
    return BufferGeometryUtils.mergeBufferGeometries(
      [
        baseGeometry.clone().translate(0, 0, offset),
        baseGeometry.clone().translate(0, 0, -offset),
        baseGeometry
          .clone()
          .rotateX(0.5 * Math.PI)
          .translate(0, -offset, 0),
        baseGeometry
          .clone()
          .rotateX(0.5 * Math.PI)
          .translate(0, offset, 0),
        baseGeometry
          .clone()
          .rotateY(0.5 * Math.PI)
          .translate(-offset, 0, 0),
        baseGeometry
          .clone()
          .rotateY(0.5 * Math.PI)
          .translate(offset, 0, 0),
      ],
      false
    );
  }

  private _addDiceEvents(dice: DiceType) {
    dice.body.addEventListener('sleep', (e: any) => {
      dice.body.allowSleep = false;

      const euler = new CANNON.Vec3();
      e.target.quaternion.toEuler(euler);

      const eps = 0.1;
      let isZero = (angle: number) => Math.abs(angle) < eps;
      let isHalfPi = (angle: number) => Math.abs(angle - 0.5 * Math.PI) < eps;
      let isMinusHalfPi = (angle: number) =>
        Math.abs(0.5 * Math.PI + angle) < eps;
      let isPiOrMinusPi = (angle: number) =>
        Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps;

      // 停止运动骰子计数
      switch (true) {
        case isZero(euler.z):
          switch (true) {
            case isZero(euler.x):
            case isHalfPi(euler.x):
            case isMinusHalfPi(euler.x):
            case isPiOrMinusPi(euler.x):
              this.count += 1;
              break;
            default:
              break;
          }
          break;
        case isHalfPi(euler.z):
        case isMinusHalfPi(euler.z):
          this.count += 1;
          break;
        default:
          break;
      }

      if (isZero(euler.z)) {
        if (isZero(euler.x)) {
          this._runCb('result', 1);
        } else if (isHalfPi(euler.x)) {
          this._runCb('result', 4);
        } else if (isMinusHalfPi(euler.x)) {
          this._runCb('result', 3);
        } else if (isPiOrMinusPi(euler.x)) {
          this._runCb('result', 6);
        } else {
          // landed on edge, and wait to fall on side and fire the event again
          dice.body.allowSleep = true;
        }
      } else if (isHalfPi(euler.z)) {
        this._runCb('result', 2);
      } else if (isMinusHalfPi(euler.z)) {
        this._runCb('result', 5);
      } else {
        // landed on edge, and wait to fall on side and fire the event again
        dice.body.allowSleep = true;
      }

      // 存在一个骰子靠在另外一个骰子上时候，end事件可能永远不会被触发
      // todo: 识别这种情况
      if (this.count === this.diceArray.length) {
        // 所有骰子运动事件已结束
        this._runCb('end');
      }
    });
  }

  private _runCb(t: string, v?: number) {
    const cbList = this.listeners.get(t);
    if (!cbList) return;
    cbList.forEach((cb) => {
      if (v !== undefined) {
        cb(v);
      } else {
        cb();
      }
    });
  }

  createPhysics() {
    const pw = new CANNON.World({
      allowSleep: true,
      gravity: new CANNON.Vec3(0, -50, 0),
    });
    pw.defaultContactMaterial.restitution = 0.3;
    return pw;
  }

  throwDice() {
    this.count = 0;
    this.diceArray.forEach((d, dIdx) => {
      d.body.velocity.setZero();
      d.body.angularVelocity.setZero();

      d.body.position = new CANNON.Vec3(4, dIdx * 1.5, -0.5);
      d.mesh.position.copy(d.body.position);

      d.mesh.rotation.set(
        2 * Math.PI * Math.random(),
        0,
        2 * Math.PI * Math.random()
      );
      d.body.quaternion.copy(d.mesh.quaternion);

      const force = 1 + 2 * Math.random();
      d.body.applyImpulse(
        new CANNON.Vec3(-force, force, 0),
        new CANNON.Vec3(0, 0, 0.2)
      );

      d.body.allowSleep = true;
    });
  }

  render(camera: THREE.Camera) {
    const run = () => {
      this.physicsWorld.fixedStep();
      for (const dice of this.diceArray) {
        dice.mesh.position.copy(dice.body.position);
        dice.mesh.quaternion.copy(dice.body.quaternion);
      }
      this.renderer?.render(this.scene, camera);
      requestAnimationFrame(run);
    };
    run();
  }

  dispose() {
    const len = this.diceArray.length;
    for (let i = 0; i < len; i += 1) {
      const d = this.diceArray.pop();
      this.disposeGroup(d.mesh);
      this.physicsWorld.removeBody(d.body);
    }

    this.renderer?.dispose();
  }
}

export default DiceWorld;
