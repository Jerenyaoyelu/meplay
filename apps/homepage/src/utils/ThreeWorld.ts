import * as THREE from 'three';

export default class ThreeWorld {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer | null = null;
  opt: any;
  constructor(opt?: any) {
    this.opt = opt || {};
    this.scene = new THREE.Scene();
  }

  createRender(canvasEl: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: canvasEl,
      ...this.opt,
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  createCamera(args: any[]) {
    try {
      const camera = new THREE.PerspectiveCamera(...args);
      camera.position.set(0, 0.4, 3.5).multiplyScalar(6);
      camera.lookAt(0, 0, 0);
      return camera;
    } catch (err) {
      console.log(err);
      throw new Error('相机创建出错');
    }
  }

  disposeGroup(group: THREE.Group) {
    group.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        // 释放子网格的几何体、材质和纹理
        child.geometry.dispose();
        child.material.dispose();
        if (child.material.map) {
          child.material.map.dispose();
        }
      }
    });

    // 移除所有子对象
    group.clear();
  }
}
