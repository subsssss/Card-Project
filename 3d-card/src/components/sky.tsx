import { BackSide, Vector3 } from "three";
import { useInfoStore } from '../store/infoStore';
import { useCameraStore } from '../store/cameraStore';


interface ISkyProps{
    onClick:Function
}

const Sky=()=>{
    const {view,setView}=useInfoStore();
    const {setTarget,setZoom}=useCameraStore()

    const onClick=()=>{
        if(view){
            setView(false)
            setTarget(new Vector3(0,0,0))
       
        }
    }
    return(
        <mesh onClick={onClick}>
            <boxGeometry args={[10000, 10000, 10000]}/>
            <meshStandardMaterial color={'orange'}
            // depthTest={false}
            // depthWrite={false}
            side={BackSide}
            visible={false}/>
        </mesh>
    )
}
export default Sky;