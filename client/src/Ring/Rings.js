import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

const Ring = ({ currentRotateOne, currentRotateTwo, currentRotateThree, currentRotateFour }) => {

    const mountRef = useRef(null)
    const controls = useRef(null)
    const controls2 = useRef(null)
    const controls3 = useRef(null)
    const controls4 = useRef(null)

    useEffect(() => {
            //Data from the canvas
            const currentRef = mountRef.current
            const {clientWidth: width, clientHeight: height} = currentRef

            //Scene, camera, renderer
            const scene = new THREE.Scene()
            scene.background = null
            const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000)
            scene.add(camera)
            camera.position.set(100, 100, 100)
            camera.lookAt(new THREE.Vector3())

            const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})
            renderer.setSize(width, height)
            currentRef.appendChild(renderer.domElement)

            //OrbitControls
            const orbitControls = new OrbitControls(camera, renderer.domElement)
            orbitControls.enableDamping = true
            orbitControls.maxDistance = 90
            orbitControls.minDistance = 45
            orbitControls.maxPolarAngle = Math.PI * 0.5
            orbitControls.minPolarAngle = Math.PI * 0.2

            //Resize canvas
            const resize = () => {
                renderer.setSize(currentRef.clientWidth, currentRef.clientHeight)
                camera.aspect = currentRef.clientWidth / currentRef.clientHeight
                camera.updateProjectionMatrix()
            }
            window.addEventListener("resize", resize);

            //envMap
            const cubeTextureLoader = new THREE.CubeTextureLoader()
            const env = cubeTextureLoader.load([
                "./model/envMap/px.png",
                "./model/envMap/nx.png",
                "./model/envMap/py.png",
                "./model/envMap/ny.png",
                "./model/envMap/pz.png",
                "./model/envMap/nz.png",
            ])
            scene.environment = env

            //Grupos
            const rotateOne = new THREE.Group()
            const rotateTwo = new THREE.Group()
            const rotateThree = new THREE.Group()
            const rotateFour = new THREE.Group()
            const baza = new THREE.Group()

            //Loaders
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath("./../../../draco/")

            const gltfLoader = new GLTFLoader()
            gltfLoader.setDRACOLoader(dracoLoader)
            gltfLoader.load(`./../../../model/RingDraco/pipkaDoorDraco.gltf`, (gltf) => {

                while (gltf.scene.children.length) {
                    if (gltf.scene.children[0].name.includes("rotateOne")) {
                        rotateOne.add(gltf.scene.children[0])}
                    else if (gltf.scene.children[0].name.includes("rotateTwo")) {
                        rotateTwo.add(gltf.scene.children[0])}
                    else if (gltf.scene.children[0].name.includes("rotateThree")) {
                        rotateThree.add(gltf.scene.children[0])}
                    else if (gltf.scene.children[0].name.includes("rotateFour")) {
                        rotateFour.add(gltf.scene.children[0])}
                    else {baza.add(gltf.scene.children[0])}
                }
                changeOne(currentRotateOne)
                changeTwo(currentRotateTwo)
                changeThree(currentRotateThree)
                changeFour(currentRotateFour)
                scene.add(baza)
            })

            //Controls Change rotateOne
            let currentOneScene = null;
            const changeOne = (oneName) => {

                scene.remove(currentOneScene)
                currentOneScene = null;
                for (let i = 0; i < rotateOne.children.length; i++) {
                    if (rotateOne.children[i].name.includes(oneName.name)) {
                        currentOneScene = rotateOne.children[i].clone()
                    }
                }
                if (currentOneScene !== null) {
                    scene.add(currentOneScene)
                }
            }

            //Controls Change rotateTwo
            let currentTwoScene = null
            const changeTwo = (twoName) => {

                scene.remove(currentTwoScene)
                currentTwoScene = null;
                for (let i = 0; i < rotateTwo.children.length; i++) {
                    if (rotateTwo.children[i].name.includes(twoName.name)) {
                        currentTwoScene = rotateTwo.children[i].clone()
                    }
                }
                if (currentTwoScene !== null) {
                    scene.add(currentTwoScene)
                }
            }

            //Controls Change rotateThree
            let currentThreeScene = null
            const changeThree = (threeName) => {

                scene.remove(currentThreeScene)
                currentThreeScene = null;
                for (let i = 0; i < rotateThree.children.length; i++) {
                    if (rotateThree.children[i].name.includes(threeName.name)) {
                        currentThreeScene = rotateThree.children[i].clone()
                    }
                }
                if (currentThreeScene !== null) {
                    scene.add(currentThreeScene)
                }
            }

            //Controls Change rotateFour
            let currentFourScene = null
            const changeFour = (fourName) => {

                scene.remove(currentFourScene)
                currentFourScene = null;
                for (let i = 0; i < rotateFour.children.length; i++) {
                    if (rotateFour.children[i].name.includes(fourName.name)) {
                        currentFourScene = rotateFour.children[i].clone()
                    }
                }
                if (currentFourScene !== null) {
                    scene.add(currentFourScene)
                }
            }

            controls.current = { changeOne }
            controls2.current = { changeTwo }
            controls3.current = { changeThree }
            controls4.current = { changeFour }

            //Lights
            const ambientalLight = new THREE.AmbientLight(0xffffff, 0.1)
            scene.add(ambientalLight)

            const pointLights = new THREE.DirectionalLight(0xffffff, 4)
            pointLights.position.set(100, 100, 100)
            scene.add(pointLights)

            const pointLights1 = new THREE.DirectionalLight(0xffffff, 2)
            pointLights1.position.set(-100, 100, 100)
            scene.add(pointLights1)

            //Animate the scene
            const animate = () => {
                orbitControls.update()
                renderer.render(scene, camera)
                requestAnimationFrame(animate)
            };
            animate()

            return () => {
                window.removeEventListener("resize", resize)
                currentRef.removeChild(renderer.domElement)
            };
        },
        [])

    useEffect(() => {
        controls.current.changeOne(currentRotateOne)
    }, [currentRotateOne])

    useEffect(() => {
        controls2.current.changeTwo(currentRotateTwo)
    }, [currentRotateTwo])

    useEffect(() => {
        controls3.current.changeThree(currentRotateThree)
    }, [currentRotateThree])

    useEffect(() => {
        controls4.current.changeFour(currentRotateFour)
    }, [currentRotateFour])

    return (
        <div
            className='Contenedor3D'
            ref={mountRef}
            style={{ width: "100%", height: "100vh" }}
        >
        </div>
    )
}

export default Ring