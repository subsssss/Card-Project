import { ContactShadows, Html, useAnimations, useFBX } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { randomUUID } from "crypto";
import { memo, useEffect, useRef, useState } from "react"
import shortid from "shortid";
import { AnimationMixer, Group, Vector3, Object3D, Bone, AnimationClip, Plane } from 'three';
import ItemSwitch from "./item-switch"
import { v4 as uuidv4 } from 'uuid';
import { useBox } from "@react-three/cannon";
import { SkeletonUtils } from 'three-stdlib';
import MeshHtml from "./mesh-html";

interface IRabbitProps{
    value:number;
    rabbit:Group;
    animationClips:AnimationClip[];
    clickEvent?:Function;
}

const Rabbit=({value,rabbit,animationClips}:IRabbitProps)=>{
     
    console.log(rabbit);
    const [textVisible,setTextVisible]=useState<boolean>(false);


    const temp =useRef<Group>(null);

    const {actions}=useAnimations(animationClips,temp);

    useEffect(()=>{
        // if(animationClips.length>0){
        //     actions['run2|Wolf_Run_Cycle_']?.play();
        // }
        // temp.current?.scale.set(
        //     0.1,0.1,0.1
        // )
    },[temp])


    useFrame((state, delta) => {
        let t = (state.clock.getElapsedTime() * 0.5)+value;

        // rabbit.position.set(Math.cos(t), 0, -Math.sin(t))
        // .multiplyScalar(200);

        // rabbit.rotation.set(
        //     rabbit.rotation.x,
        //     t - Math.PI,
        //     rabbit.rotation.z,
        // )  

        temp.current?.position.set(Math.cos(t), 0, -Math.sin(t))
        .multiplyScalar(20);

        temp.current?.rotation.set(
            0,5.5,0
        )

        // temp.current?.rotation.set(
        //     temp.current.rotation.x,
        //     t - Math.PI,
        //     temp.current.rotation.z,
        // )  
    })


    return(
        <>
            <group 
            {...rabbit}
            ref={temp} 
            scale={0.1}
            castShadow
            receiveShadow>
                {/* <primitive object={rabbit} castShadow receiveShadow
                /> */}
                <ItemSwitch group={rabbit}/>
                <MeshHtml 
                    visible={textVisible}
                    position={temp.current?.position!}/>
            </group>
        </>

    )
}

export default Rabbit