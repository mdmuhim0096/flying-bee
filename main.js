import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js"
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js"
import { gsap } from "https://cdn.skypack.dev/gsap";

const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


camera.position.z = 13;

const scene = new THREE.Scene();

let bee;
let mixer;
let zVal = -10;
const loader = new GLTFLoader();
loader.load("img/demon_bee_full_texture.glb",
    function (gltf) {
        bee = gltf.scene;
        scene.add(bee);
        mixer = new THREE.AnimationMixer(bee);
        mixer.clipAction(gltf.animations[0]).play();
    }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("maincontainer").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);

scene.add(topLight);

const reDerser3D = () => {
    requestAnimationFrame(reDerser3D)
    renderer.render(scene, camera);
    if (mixer) mixer.update(0.02);
}

reDerser3D();

const arrModelPosition = [
    {
        id: "page_1",
        position: { x: 1.7, y: -0.5, z: zVal },
        rotation: { x: 0, y: 1, z: 0 }
    },
    {
        id: "page_2",
        position: { x: -1.7, y: -1.5, z: zVal },
        rotation: { x: 0, y: 5, z: 0 }
    },
    {
        id: "page_3",
        position: { x: 1.5, y: 0, z: zVal },
        rotation: { x: 0, y: -0, z: 0 }
    },
    {
        id: "page_4",
        position: { x: -1.4, y: -0.4, z: zVal },
        rotation: { x: 0, y: 1, z: 0 }
    },
    {
        id: "page_5",
        position: { x: -1.9, y: -1, z: zVal },
        rotation: { x: 0, y: 3.2, z: 0 }
    },
    {
        id: "page_6",
        position: { x: -1, y: -1, z: zVal },
        rotation: { x: 0, y: -2.5, z: 0 }
    },
];

    const width = window.innerWidth;

    if (width == 768) {
        arrModelPosition[0].position.x = 1.5;
        arrModelPosition[1].position.x = -0.5;
        arrModelPosition[2].position.x = 1.5;
        arrModelPosition[3].position.x = -2;
        arrModelPosition[4].position.x = 0;
        arrModelPosition[5].position.x = -1;
        
        arrModelPosition[0].position.y = 1.7;
        arrModelPosition[1].position.y = 0.5;
        arrModelPosition[2].position.y = 0;
        arrModelPosition[3].position.y = 0;
        arrModelPosition[4].position.y = 0;
        arrModelPosition[5].position.y = -2.9;

        arrModelPosition[0].position.z = -30;
        arrModelPosition[1].position.z = -30;
        arrModelPosition[2].position.z = -30;
        arrModelPosition[3].position.z = -30;
        arrModelPosition[4].position.z = -30;
        arrModelPosition[5].position.z = -30;
    }

    if (width == 425) {

        arrModelPosition[0].position.x = 1.5;
        arrModelPosition[1].position.x = -0.5;
        arrModelPosition[2].position.x = 1.5;
        arrModelPosition[3].position.x = -2;
        arrModelPosition[4].position.x = 0;
        arrModelPosition[5].position.x = -1;
        
        arrModelPosition[0].position.y = 1;
        arrModelPosition[1].position.y = 0.5;
        arrModelPosition[2].position.y = 0;
        arrModelPosition[3].position.y = 0;
        arrModelPosition[4].position.y = 0;
        arrModelPosition[5].position.y = -2.2;

        arrModelPosition[0].position.z = -30;
        arrModelPosition[1].position.z = -30;
        arrModelPosition[2].position.z = -30;
        arrModelPosition[3].position.z = -30;
        arrModelPosition[4].position.z = -30;
        arrModelPosition[5].position.z = -30;

    }
    if (width == 375) {

        arrModelPosition[0].position.x = 1.5;
        arrModelPosition[1].position.x = -0.5;
        arrModelPosition[2].position.x = 1.5;
        arrModelPosition[3].position.x = -2;
        arrModelPosition[4].position.x = 0;
        arrModelPosition[5].position.x = -1;
        
        arrModelPosition[0].position.y = 1;
        arrModelPosition[1].position.y = 0.5;
        arrModelPosition[2].position.y = 0;
        arrModelPosition[3].position.y = 0;
        arrModelPosition[4].position.y = 0;
        arrModelPosition[5].position.y = -2;

        arrModelPosition[0].position.z = -30;
        arrModelPosition[1].position.z = -30;
        arrModelPosition[2].position.z = -30;
        arrModelPosition[3].position.z = -30;
        arrModelPosition[4].position.z = -30;
        arrModelPosition[5].position.z = -30;

    }
    if (width == 320) {
        arrModelPosition[0].position.x = 1;
        arrModelPosition[1].position.x = 0.5;
        arrModelPosition[2].position.x = 1.5;
        arrModelPosition[3].position.x = -2;
        arrModelPosition[4].position.x = 0;
        arrModelPosition[5].position.x = -1;
        
        arrModelPosition[0].position.y = 1;
        arrModelPosition[1].position.y = 0.5;
        arrModelPosition[2].position.y = 0;
        arrModelPosition[3].position.y = 0;
        arrModelPosition[4].position.y = 0;
        arrModelPosition[5].position.y = -2.5;

        arrModelPosition[0].position.z = -40;
        arrModelPosition[1].position.z = -40;
        arrModelPosition[2].position.z = -40;
        arrModelPosition[3].position.z = -40;
        arrModelPosition[4].position.z = -40;
        arrModelPosition[5].position.z = -40;
    }


const modelMove = () => {
    let sections = document.querySelectorAll(".section");
    let currentScetion;
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
            currentScetion = section.id;
        }
    });

    let activePosition = arrModelPosition.findIndex((val) => val.id == currentScetion);
    if (activePosition >= 0) {
        let new_value = arrModelPosition[activePosition];
        gsap.to(bee.position, {
            x: new_value.position.x,
            y: new_value.position.y,
            z: new_value.position.z,
            duration: 2,
            ease: "power1.out"
        });
        gsap.to(bee.rotation, {
            x: new_value.rotation.x,
            y: new_value.rotation.y,
            z: new_value.rotation.z,
            duration: 2,
            ease: "power1.out"
        })
    }
}

window.addEventListener("scroll", () => {
    if (bee) {
        modelMove();
    }
});

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect(window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();
})

gsap.to(".link", {
    y: "-10",
    y: "10",
    duration: 1,
    stagger: 1,
})
