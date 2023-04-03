import React, {useRef, useEffect, useState} from 'react'
import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"
import * as dat from 'dat.gui'

const Render3D = () => {

    const mountRef = useRef(null)
    const path = "./model/RingDraco/door2Door.gltf"

    useEffect(() => {
        const currentRef = mountRef.current;
        const gui = new dat.GUI({ width: 400 })
        const sceneParams = {
            envMapIntensity: 0.38
        }

        const {clientWidth: width, clientHeight: height} = currentRef;

        //Scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(10, width / height, 0.1, 100);
        scene.add(camera);
        camera.position.set(15, 5, 15);
        camera.lookAt(new THREE.Vector3());

        const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
        renderer.shadowMap.enabled = true;
        renderer.setSize(width, height);
        currentRef.appendChild(renderer.domElement);

        //OrbitControls
        const orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.maxDistance = 30;
        orbitControls.minDistance = 1;
        orbitControls.maxPolarAngle = Math.PI * 0.5;
        orbitControls.minPolarAngle = Math.PI * 0.2;
        //Resize canvas
        const resize = () => {
            renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
            camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", resize);

        // Light
        const folderLights = gui.addFolder("Lights")

        const ambientalLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientalLight);

        folderLights.add(ambientalLight, 'intensity')
            .min(0)
            .max(10)
            .step(0.0001)
            .name("DL Intensity")

        const pointlight = new THREE.PointLight(0xffffff, 5);
        pointlight.position.set(5, 5, 1);
        scene.add(pointlight);

        folderLights.add(pointlight, 'intensity')
            .min(0)
            .max(10)
            .step(0.0001)
            .name("Point Light 1")

        const pointlight2 = new THREE.PointLight(0xffffff, 6);
        pointlight2.position.set(-6, 5, 8);
        scene.add(pointlight2);

        folderLights.add(pointlight2, 'intensity')
            .min(0)
            .max(10)
            .step(0.0001)
            .name("Point Light 2")

        const envMap = new THREE.CubeTextureLoader().load(
            [
                './model/envMap/px.png',
                './model/envMap/nx.png',
                './model/envMap/py.png',
                './model/envMap/ny.png',
                './model/envMap/pz.png',
                './model/envMap/nz.png',
            ]
        )
        scene.environment = envMap
        folderLights.add(sceneParams, 'envMapIntensity')
            .min(0)
            .max(20)
            .step(0.0001)
            .name("EnvMap Intensity")
            .onChange(() => {
                scene.traverse(child => {
                    if (child instanceof THREE.Mesh &&
                        child.material instanceof THREE.MeshStandardMaterial) {
                        child.material.envMapIntensity = sceneParams.envMapIntensity
                    }
                })
            })

        //Groups
        const det = new THREE.Group();

        //Loaders
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath("./draco/")

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(path, (gltf) => {
            // console.log(gltf.scene.children)
            const obje = gltf.scene
            gltf.scene.children[9].visible = false
            // gui.add(gltf.scene.children[9].visible, 'visible');
            scene.add(gltf.scene)
        })

        // const controls = new function () {
        //     gltf.scene.children[1].visible = false
        // };

        //Animate the scene
        const animate = () => {
            orbitControls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            gui.destroy()
            currentRef.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div>
            <div
                className='Contenedor3D'
                ref={mountRef}
                style={{width: "100%", height: "100vh"}}
            >
            </div>
        </div>
    )
}

export default Render3D