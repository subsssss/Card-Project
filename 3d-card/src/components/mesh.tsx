import { Color, Mesh, Vector3 } from "three"

interface IMeshProps{
    mesh:Mesh
}

const MeshComponent=({mesh}:IMeshProps)=>{
    
    return(
        <mesh 
     
        {...mesh}
        castShadow
        >
            <meshPhongMaterial color={new Color('#DFC1C1')}/>
            {/* <meshBasicMaterial color={new Color('#bdbdbd')}/> */}
        </mesh>
    )
}
export default MeshComponent