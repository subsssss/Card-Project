import { PerspectiveCamera, TrackballControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react"
import { Euler, Vector3 } from "three"
import { useCameraStore } from '../store/cameraStore';
import { useCameraSWR } from '../store/camera.swr';

interface ICameraProps{
    zoomTarget:Vector3;
    zoom:boolean;
}

const CameraComponent=()=>{

   
    const {zoom,target}=useCameraStore();
    const {cameraState}=useCameraSWR()
    
    const controlRef=useRef<any>()

    useFrame(()=>{
    //  if(cameraState?.zoom){
    //     controlRef.current.target.lerp(
    //         cameraState.targetPosition,0.01);
    //     controlRef.current.update();
    //     controlRef.current.object.updateProjectionMatrix();
    //  }

        if(zoom){
            controlRef.current.target.lerp(
                target,0.05);
            controlRef.current.update();
            controlRef.current.object.updateProjectionMatrix();
        }
    })



    return(
        <>
          <PerspectiveCamera
                // rotation={new Euler(0,0,0)}
                // up={new Vector3(0,0,0)}
                
                makeDefault// mesh깨짐
                position={new Vector3(
                    -44.171427654186914,
                    15.36148701456843,
                    30.968837587650565
                )}
                  rotation={new Euler(
                    -0.4604669441340156,
                    -1.2189782168796799,
                    -0.4544711532771109
                )}
                zoom={1}
                near={1}
                far={100000}
                />

                <TrackballControls 
                noZoom
                noRotate
                noPan
                ref={controlRef}
             
                regress={false}
                // target={new Vector3(50,0,0)}
                />
        </>
    )
}
export default CameraComponent