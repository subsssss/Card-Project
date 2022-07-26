import { useFBX } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { memo, useEffect, useRef, useState } from "react";
import { AnimationMixer, Bone, Group, Object3D, Vector3 } from "three";
import ItemSwitch from "./item-switch";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

interface IObjectProps{

}

const ObjectComponent=({}:IObjectProps)=>{

    // const group = useFBX('/dance.fbx')

    const [group,setGroup]=useState<Group>()

    useEffect(()=>{
        new FBXLoader().load('/dance2.fbx',(data)=>{
            // console.log('!')
            // console.log(data);
            setGroup(data);
        })
    },[])

    let mixer:AnimationMixer 
    if (group?.animations.length) {
        mixer = new AnimationMixer(group);
        group.animations.forEach(clip => {
            
            const action = mixer.clipAction(clip)
            action.play();
        });
    }

    useFrame((state, delta) => {
        ref.current.rotateY(0.01);
        mixer?.update(delta)
    })

    const ref = useRef<any>(null)

    const [element,setElement]=useState<JSX.Element>()

    useEffect(()=>{
        if(group?.children?.length!>0){
            setElement(<ItemSwitch group={group!}/>)
        }
    },[group])

    return(
        <group ref={ref} 
        scale={0.1}
        castShadow
        receiveShadow
        >
            {element}
        </group>
        // <primitive scale={0.1} 
        // onClick={()=>console.log(ref)}
        // ref={ref}
        // castShadow 
        // receiveShadow
        // name='human' 
        // object={group}  
        // />
    )
}

export default memo(ObjectComponent);