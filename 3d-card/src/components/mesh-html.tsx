import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Euler, Vector3 } from "three";

interface IMeshHtmlProps{
    visible:boolean;
    position:Vector3;
}

const MeshHtml=({visible,position}:IMeshHtmlProps)=>{


    return(
        <Html 
        className={`${visible?'block':'hidden'}
        border
        `}
        sprite
        position={[20, 130, 0]}
        >
            test Text
        </Html>
    )
}

export default MeshHtml;