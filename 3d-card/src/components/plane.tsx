import { Vector3 } from "three"

interface IPlaneProps{
  position:Vector3
}

const PlaneComponent=()=>{
    return(
      <>
       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        {/* <meshStandardMaterial 
          transparent color="lightblue" 
          polygonOffset polygonOffsetUnits={1} 
          polygonOffsetFactor={1} /> */}
        <shadowMaterial attach="material"  opacity={0.7} />
      </mesh>
      {/* <gridHelper args={[100,100,100]}/> */}
      </>
     
    )
}
export default PlaneComponent