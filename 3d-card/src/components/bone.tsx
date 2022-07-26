import { Bone, Group } from "three"
import ItemSwitch from "./item-switch"

interface BoneProps{
    bone:Bone
}

const BoneComponent=({bone}:BoneProps)=>{
    return(
        <bone {...bone}>
            <ItemSwitch group={bone}/>
        </bone>
    )
}
export default BoneComponent