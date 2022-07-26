import { Vector3 } from 'three';
import create from 'zustand';


interface CameraState{
    zoom:boolean,
    target:Vector3,
    setZoom:(zoom:boolean)=>void;
    setTarget:(target:Vector3)=>void;
}


export const useCameraStore = create<CameraState>(set=>({
    zoom:false,
    target:new Vector3(),
    setZoom:(zoom:boolean)=>set({zoom}),
    setTarget:(target:Vector3)=>set({target})
}))
