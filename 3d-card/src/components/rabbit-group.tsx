import { useFBX } from "@react-three/drei"
import { memo, useEffect, useState } from "react";
import { AnimationMixer, Bone, Group, Vector3 } from "three";
import Rabbit from "./rabbit"
import { useFrame } from '@react-three/fiber';
import shortid from "shortid";
import { SkeletonUtils } from "three-stdlib";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useCameraSWR } from '../store/camera.swr';


interface IRabbitGroupProps{

}

const RabbitGroup=()=>{

   
    // const {setTemp}=useCameraSWR()
    // const rabbit = useFBX('/wolf.fbx');
    // const rabbit = useFBX('/wolf.fbx');
    const loader = new OBJLoader()
    const [rabbit1,setRabbit1]=useState<Group>();
    const [rabbit2,setRabbit2]=useState<Group>();
    const [rabbit3,setRabbit3]=useState<Group>();
    const [rabbit4,setRabbit4]=useState<Group>();

   
    

    useEffect(()=>{
        loader.load('https://raw.githubusercontent.com/subsssss/Card-Project/main/Cartoon_bunny_2_obj_pose_1.obj',(obj)=>{
            setRabbit1(obj);
            console.log(obj)
        })
        loader.load('https://raw.githubusercontent.com/subsssss/Card-Project/main/Cartoon_bunny_2_obj_pose_2.obj',(obj)=>{
            setRabbit2(obj);
            console.log(obj)
        })
        loader.load('https://raw.githubusercontent.com/subsssss/Card-Project/main/Cartoon_bunny_2_obj_pose_3.obj',(obj)=>{
            setRabbit3(obj);
            console.log(obj)
        })
        loader.load('https://raw.githubusercontent.com/subsssss/Card-Project/main/Cartoon_bunny_2_obj_pose_4.obj',(obj)=>{
            setRabbit4(obj);
            console.log(obj)
        })
    },[])

    // const rabbit = useFBX('/wolf.fbx')


    return(
        <group>
        {
            rabbit1&& <Rabbit key={shortid.generate()} value={1} 
            rabbit={SkeletonUtils.clone(rabbit1!) as Group}
            animationClips={rabbit1!.animations}/>
        }
                {
            rabbit2&& <Rabbit key={shortid.generate()} value={2.5} 
            rabbit={SkeletonUtils.clone(rabbit2!) as Group}
            animationClips={rabbit2!.animations}/>
        }
                {
            rabbit3&& <Rabbit key={shortid.generate()} value={4.1} 
            rabbit={SkeletonUtils.clone(rabbit3!) as Group}
            animationClips={rabbit3!.animations}/>
        }
                {
            rabbit4&& <Rabbit key={shortid.generate()} value={5.7} 
            rabbit={SkeletonUtils.clone(rabbit4!) as Group}
            animationClips={rabbit4!.animations}/>
        }
        {/* <Rabbit key={0} value={1} 
            rabbit={SkeletonUtils.clone(rabbit) as Group}
            animationClips={rabbit.animations}
            // clickEvent={()=>setTemp()}
            />
            <Rabbit key={1} value={2.5} 
            rabbit={SkeletonUtils.clone(rabbit) as Group}
            animationClips={rabbit.animations}
            // clickEvent={()=>setTemp()}
            />
            <Rabbit key={2} value={4} 
            rabbit={SkeletonUtils.clone(rabbit) as Group}
            animationClips={rabbit.animations}
            // clickEvent={()=>setTemp()}
            />
        <Rabbit key={3} value={5.5} 
            rabbit={SkeletonUtils.clone(rabbit) as Group}
            animationClips={rabbit.animations}
            // clickEvent={()=>setTemp()}
            /> */}
        </group>
    )
   
}
export default RabbitGroup