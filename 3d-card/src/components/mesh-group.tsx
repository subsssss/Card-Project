import { Group } from "three";
import ItemSwitch from "./item-switch";
import { useRef } from 'react';

interface IMeshGroupProps{
    group:Group
}

const MeshGroupComponent=({group}:IMeshGroupProps)=>{

    const ref=useRef<Group>(null);
    return(
        <group ref={ref}
        
        {...group} 
        
        onClick={()=>{
            console.log('group')
            console.log(ref);
        }}
        castShadow
        receiveShadow
        >
              <ItemSwitch group={group}/>
        </group>
    )
}
export default MeshGroupComponent;