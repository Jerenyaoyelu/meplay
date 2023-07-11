import * as BABYLON from '@babylonjs/core';
import '@babylonjs/inspector';

const model = 'https://t.newscdn.cn/statics/glb/carnival.glb';
const skyEnv = 'https://s.newscdn.cn/cube/test/studio.env';
const skyUrl = 'https://s.newscdn.cn/cube/test/sky6/sky';

interface CameraOptProp {
  alpha?: number;
  beta?: number;
  radius?: number;
  fov?: number;
}

const min = 5; // 判断是否为点击还是划动的阈值
class Carnival {
  engine: BABYLON.Engine;
  scene: BABYLON.Scene;
  camera: BABYLON.ArcRotateCamera | BABYLON.FreeCamera | null = null;
  viewY = 10;
  inputMap: any = {};
  mode: 'free' | 'arc' = 'free';
  cameraOpt: CameraOptProp = {
    alpha: 1.4,
    beta: 1.4,
    radius: 4,
    fov: 1.6,
  };
  moving = false;
  pointer: any = null;
  constructor(canvas: HTMLCanvasElement, opt: any) {
    if (opt?.viewY) {
      this.viewY = opt?.viewY;
    }
    if (opt?.mode) {
      this.mode = opt?.mode;
    }
    if (opt) {
      const { alpha, beta, radius, fov } = opt;
      if (alpha) {
        this.cameraOpt.alpha = alpha;
      }
      if (beta) {
        this.cameraOpt.beta = beta;
      }
      if (radius) {
        this.cameraOpt.radius = radius;
      }

      if (fov) {
        this.cameraOpt.fov = fov;
      }
    }
    this.engine = new BABYLON.Engine(canvas, true);
    this.scene = this.createScene();
    canvas.addEventListener('keydown', (event) => {
      if (event.key === 'i') {
        this.scene.debugLayer.show({
          embedMode: true,
        });
      }
      if (this.mode === 'free') {
        this.inputMap[event.key] = true;
      }
    });
    if (this.mode === 'free') {
      canvas.addEventListener('keyup', (event) => {
        this.inputMap[event.key] = false;
      });
    }
    this.engine?.runRenderLoop(() => {
      this.moveCamera();
      this.scene?.render();
    });
    const that = this.engine;
    // Resize the canvas when the window is resized
    window.addEventListener('resize', () => {
      that.resize();
    });
  }

  createScene() {
    const scene = new BABYLON.Scene(this.engine);
    scene.collisionsEnabled = true;
    let camera: BABYLON.ArcRotateCamera | BABYLON.FreeCamera | null;
    if (this.mode === 'free') {
      camera = new BABYLON.FreeCamera(
        'camera',
        new BABYLON.Vector3(0, this.viewY, -5),
        scene
      );
      camera.setTarget(BABYLON.Vector3.Zero());
      camera.rotation = new BABYLON.Vector3(
        BABYLON.Tools.ToRadians(-2.5),
        BABYLON.Tools.ToRadians(-175),
        0
      );
    } else {
      const { alpha, beta, radius } = this.cameraOpt;
      camera = new BABYLON.ArcRotateCamera(
        'camera',
        alpha as number,
        beta as number,
        radius as number,
        new BABYLON.Vector3(-20, this.viewY, -80),
        scene
      );
      camera.fov = this.cameraOpt.fov as number;
      // camera.position.y = this.viewY;
      camera.lowerRadiusLimit = radius as number;
      camera.upperRadiusLimit = radius as number;

      camera.lowerBetaLimit = (beta as number) - 0.5;
      camera.upperBetaLimit = (beta as number) + 0.3;
    }
    camera.attachControl();
    camera.checkCollisions = true;

    this.camera = camera;
    scene.environmentTexture = new BABYLON.CubeTexture(skyEnv, scene);
    scene.imageProcessingConfiguration.contrast = 1.5;
    this.moveByClick(scene);
    // Create a skybox
    const skybox = BABYLON.MeshBuilder.CreateBox(
      'skyBox',
      { size: 1000.0 },
      scene
    );
    const skyboxMaterial = new BABYLON.StandardMaterial('skyBox', scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(skyUrl, scene);
    skyboxMaterial.reflectionTexture.coordinatesMode =
      BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

    // 导入场景
    BABYLON.SceneLoader.LoadAssetContainer(model, '', scene, (container) => {
      console.log(container);
      container.instantiateModelsToScene((name) => {
        container.meshes.forEach((mesh) => {
          mesh.checkCollisions = true;
          if (mesh.name === 'BigScreen') {
            this.addTexture(mesh as BABYLON.Mesh);
          }
        });
        return name;
      });
    });
    return scene;
  }

  moveCamera() {
    // Move the camera
    const { inputMap, camera } = this;
    if (!camera || this.mode === 'arc') return;
    const cameraSpeed = 0.2;
    if (inputMap['w']) {
      camera.position.addInPlace(
        camera.getDirection(BABYLON.Axis.Z).scale(cameraSpeed)
      );
    }
    if (inputMap['s']) {
      camera.position.subtractInPlace(
        camera.getDirection(BABYLON.Axis.Z).scale(cameraSpeed)
      );
    }
    if (inputMap['a']) {
      camera.position.addInPlace(
        camera.getDirection(BABYLON.Axis.X).scale(-cameraSpeed)
      );
    }
    if (inputMap['d']) {
      camera.position.addInPlace(
        camera.getDirection(BABYLON.Axis.X).scale(cameraSpeed)
      );
    }

    // Update the camera direction
    camera.setTarget(camera.position.add(camera.getDirection(BABYLON.Axis.Z)));
    camera.position.y = this.viewY; // set the camera box position to a fixed height
  }

  addTexture(mesh: BABYLON.Mesh) {
    const texture = new BABYLON.Texture(
      'https://s.newscdn.cn/file/2023/04/f216f82d-4d11-407e-9bfd-2ee479323429.jpeg',
      this.scene,
      false,
      false
    );
    texture.vScale = -1;
    const mat = new BABYLON.StandardMaterial('bigScreen', this.scene);
    mat.freeze();
    mat.sideOrientation = BABYLON.Mesh.FRONTSIDE;
    mat.opacityTexture = texture;
    mat.emissiveTexture = texture;
    mat.diffuseTexture = texture;
    mesh.material = mat;
    mesh.isPickable = false;
  }

  moveByClick(scene: BABYLON.Scene) {
    const that = this;
    const { camera } = this;
    if (!camera || that.moving) return;
    scene.onPointerUp = function (evt) {
      if (that.moving || evt.button === 2) return;
      const pickResult = scene.pick(scene.pointerX, scene.pointerY);
      if (pickResult?.hit) {
        const curP = pickResult.pickedPoint;
        const absX = Math.abs((that.pointer?.x || 0) - (curP?.x || 0));
        const absY = Math.abs((that.pointer?.y || 0) - (curP?.y || 0));
        const absZ = Math.abs((that.pointer?.z || 0) - (curP?.z || 0));
        if (absX < min && absY < min && absZ < min) {
          that.moving = true;
          const newTarget = new BABYLON.Vector3(curP?.x, that.viewY, curP?.z);
          const animation = new BABYLON.Animation(
            'cameraAnimation',
            'target',
            30,
            BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
          );
          const keys = [
            { frame: 0, value: camera?.target },
            { frame: 100, value: newTarget },
          ];
          animation.setKeys(keys);
          camera?.animations.push(animation);
          scene.beginAnimation(camera, 0, 100, false, undefined, () => {
            that.moving = false;
            that.pointer = null;
          });
        }
      }
    };
    scene.onPointerDown = function (evt) {
      // evt.button === 2 右键点击
      if (that.moving || evt.button === 2) return;
      const pickResult = scene.pick(scene.pointerX, scene.pointerY);
      if (pickResult?.hit) {
        that.pointer = pickResult.pickedPoint;
      }
    };
  }
}

export default Carnival;
