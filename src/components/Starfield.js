import { useEffect } from "react";
import * as THREE from "three";

const Starfield = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";
    document.body.appendChild(renderer.domElement);

    const stars = new THREE.BufferGeometry();
    const starVertices = [];
    const starCount = 5000;

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 3000;
      const y = (Math.random() - 0.5) * 3000;
      const z = (Math.random() - 0.5) * 3000;
      starVertices.push(x, y, z);
    }
    stars.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const textureLoader = new THREE.TextureLoader();
    const circleTexture = textureLoader.load(
      "https://threejs.org/examples/textures/sprites/circle.png" // Circle sprite
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffff00,
      size: 2.5,
      map: circleTexture,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const starPoints = new THREE.Points(stars, starMaterial);
    scene.add(starPoints);

    const animate = () => {
      requestAnimationFrame(animate);
      starPoints.rotation.x += 0.0005;
      starPoints.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      document.body.removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return null;
};

export default Starfield;
