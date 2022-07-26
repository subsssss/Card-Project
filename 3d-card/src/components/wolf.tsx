import { useFBX } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { AnimationMixer, Euler, Group, Object3D, Vector3 } from "three"

import MeshHtml from "./mesh-html"

const Wolf=()=>{

    const wolf = useFBX('/wolf.fbx');

    console.log('!!')
    console.log(wolf);
    const temp =useRef<Group>(null);
    const [visible,setVisible]=useState<boolean>(false);

    const toggleVisible=()=>{
        setVisible(!visible);
        console.log(temp);
    }

    useEffect(()=>{
        wolf.rotation.order='YZX'
    },[wolf])
    let mixer:AnimationMixer 

    if (wolf.animations.length) {
        mixer = new AnimationMixer(wolf);
        console.log(wolf.animations);
        wolf.animations.forEach(clip => {
            if(clip.name==="run2|Wolf_Run_Cycle_"){
                const action = mixer.clipAction(clip);
                console.log(action);
                action.play();
            }
        });
    }

    useFrame((state, delta) => {

        let t = state.clock.getElapsedTime() * 0.5;

        temp.current?.position
          .set(Math.cos(t), 0, -Math.sin(t))
          .multiplyScalar(200);
          temp.current?.rotation.set(
              temp.current.rotation.x,
              t - Math.PI,
              temp.current.rotation.z,
          )

  
        //   wolf.rotation.y = t - Math.PI;
        //   wolf.rotation.x =  Math.PI * 0.5;
          
        //   wolf.rotation.z = Math.PI * 0.5;
        mixer?.update(delta)
    })

    

    return(
        <group>
            <primitive object={wolf} ref={temp} 
            onClick={toggleVisible}>
                <MeshHtml 
               
                visible={visible}
                position={wolf.position}/>
            </primitive>
        </group>
    )
}

export default Wolf