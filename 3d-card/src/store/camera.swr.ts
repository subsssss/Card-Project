import useSWR from "swr";
import { Vector3 } from "three";

interface ICameraStateProps{
    zoom:boolean,
    targetPosition:Vector3
}

let cameraState:ICameraStateProps={
    zoom:false,
    targetPosition:new Vector3(0,0,0)
};


export const useCameraSWR=()=>{


    const {data,mutate}=useSWR<ICameraStateProps>('cameraStateKey',()=>{
        return cameraState;
    });

    return{
        cameraState:data,
        
        setTemp:async()=>{
            cameraState={
                zoom:true,
                targetPosition:new Vector3(50,0,0)
            }
            return mutate()
        }
    }
}