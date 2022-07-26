import { SkinnedMeshProps } from "@react-three/fiber"
import { useRef, useEffect } from 'react';
import { Color, Vector3 } from "three";
import { useCameraStore } from "../store/cameraStore";
import { useInfoStore } from '../store/infoStore';

interface ISkinnedMeshProps{
    skinnedMeshData:SkinnedMeshProps
}

const SkinnedMeshComponent=({skinnedMeshData}:ISkinnedMeshProps)=>{

    const test = useRef<any>(null);

    const {zoom,setZoom,setTarget}=useCameraStore();
    const {view,setView}=useInfoStore()

    const onClick=()=>{
        setZoom(true);
         setTarget(new Vector3(50,0,0));

        setTarget(new Vector3(0,0,0));
        setView(true);
    }
    

    return(
        <skinnedMesh
        onClick={onClick}
        {...skinnedMeshData}
   
        castShadow
        receiveShadow
        // geometry={skinnedMeshData.geometry}
        // material={skinnedMeshData.material}
        // name={skinnedMeshData.name}
        // skeleton={skinnedMeshData.skeleton}
        // scale={skinnedMeshData.scale}
        // skeleton={skinnedMeshData.skeleton}
        // userData={skinnedMeshData.userData}
        // bindMatrix={skinnedMeshData.bindMatrix}
        // bindMatrixInverse={skinnedMeshData.bindMatrixInverse}
        // matrix={skinnedMeshData.matrix}
        // quaternion={skinnedMeshData.quaternion}
        // {...skinnedMeshData}
        // geometry={skinnedMeshData.geometry}
        // skeleton={skinnedMeshData.skeleton}
        // scale={skinnedMeshData.scale}
        // position={skinnedMeshData.position}
        // rotation={skinnedMeshData.rotation}
        // material={skinnedMeshData.material}
        // {...skinnedMeshData} 
        >  
         {/* <meshBasicMaterial color={new Color('#ff0000')}/> */}
            {/* {
                Array.isArray(skinnedMesh.material)?
                (
                    <>
                    {
                         skinnedMesh.material.map((material)=>{
                             return(
                                <meshPhongMaterial {...material}/>
                             )
                        })
                    }
                    </>
                   
                ):
                (
                    <meshPhongMaterial {...skinnedMesh.material}/>
                )
                
            } */}
        </skinnedMesh>
    )
}
export default SkinnedMeshComponent