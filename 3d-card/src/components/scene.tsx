import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {ContactShadows, OrbitControls, OrthographicCamera, PerspectiveCamera, TrackballControls, useFBX, useHelper} from '@react-three/drei'
import { useEffect, useRef, useState } from "react"
import {useLoader} from '@react-three/fiber';
import THREE, { AnimationMixer, Color, DirectionalLightHelper, DoubleSide, Euler, Vector3 } from "three";
import ObjectComponent from './object';
import Rabbit from "./rabbit";
import Wolf from "./wolf";
import RabbitGroup from "./rabbit-group";
import PlaneComponent from "./plane";
import LightComponent from "./light";
import CameraComponent from './camera';
import Sky from './sky';


const CanvasComponent=()=>{

    // const data = useFBX('/dance.fbx');

    return(
            <scene 
            >
                <Sky/>
                {/* <mesh position={new Vector3(10,20,0)} castShadow receiveShadow>
                    <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
                    <meshPhongMaterial attach="material" color="lightblue"/>
                 </mesh> */}
                <LightComponent/>
                
                <CameraComponent/>
                <ObjectComponent  />
                <RabbitGroup />
                {/* <ContactShadows
                 position={[10, 0, 0]} 
                 opacity={1} blur={1.5} far={0.8} /> */}
                <PlaneComponent/>
                {/* <Wolf/> */}
            </scene>
    )
}

export default CanvasComponent;