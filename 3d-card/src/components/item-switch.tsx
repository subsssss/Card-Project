import { SkinnedMeshProps } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Bone, Group, Mesh, Object3D } from 'three';
import BoneComponent from './bone';
import MeshComponent from './mesh';
import MeshGroupComponent from './mesh-group';
import SkinnedMesh from './skin-mesh';
import shortId from 'shortid';
import { SkeletonUtils } from 'three-stdlib';


interface ItemSwitchProps{
    group:Object3D<THREE.Event>;
}

const ItemSwitch=({group}:ItemSwitchProps)=>{

    return <>
    {
            group.children.map((groupItem:any,index)=>{
                switch(groupItem.type){
                    case 'Group':
                        return (<MeshGroupComponent 
                            key={index} 
                            group={groupItem as Group}/>)
                    case 'Mesh':
                        return (
                        <MeshComponent 
                            key={index} 
                            mesh={groupItem as Mesh}/>)
                    case 'SkinnedMesh':   
          
                        return (
                        <SkinnedMesh 
                            key={index} 
                            skinnedMeshData={groupItem as any}/>
                            )
                    case 'Bone':
                        return (
                        // <BoneComponent bone={groupItem as Bone}/>
                        <primitive key={index} 
                        castShadow
                        receiveShadow
                            object={groupItem as Bone}/>
                            )
                    default: return <></>
                }
            })
    }
    </>

}
export default ItemSwitch