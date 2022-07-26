import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, PointLight, PointLightHelper, SpotLightHelper, Vector3 } from "three";

const LightComponent=()=>{

    const directionalL = useRef<any>()
    const spotLight = useRef<any>();
    const pointLight = useRef<any>()

    useHelper(spotLight, SpotLightHelper, "teal")
    useHelper(directionalL,DirectionalLightHelper,100,'red');
    useHelper(pointLight,PointLightHelper,100,'yellow')
    return(
            <>
            <ambientLight intensity={0.4}/>
            
                     {/* <spotLight castShadow 
                     position={new Vector3(0,50,0)}
                     ref={spotLight} angle={0.5}
                     power={50}
                      distance={50} /> */}
                {/* <pointLight position={[100, 0, -20]} 
                color="lightblue" intensity={2.5} /> */}
                   <directionalLight
                        castShadow
                        position={[-50, 100, -50]}
                        intensity={1}
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        // shadow-camera-far={50}
                        shadow-camera-left={-100}
                        shadow-camera-right={100}
                        shadow-camera-top={100}
                        shadow-camera-bottom={-100}
         />
            </>
    
    )
}
export default LightComponent