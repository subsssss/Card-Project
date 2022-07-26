import { motion } from "framer-motion"
import BoxLayout from "./boxlayout"
import InfoBoxComponent from "./infoBox"

const InfoUser=()=>{
const variants={
    offscreen:{
        opacity:0,
        top:50
    },
    onscreen:{
        opacity:1,
        top:0
    }
}

    return(
        <InfoBoxComponent>
            <div className='absolute top-0 left-10'>
                <img className="rounded-full w-20 h-20 shadow-lg"  
                src='/image.png'/>
            </div>
               <BoxLayout>
                   <div className="text-right gap-3 text-base grid items-start">
                        <div className=' '>홍창희</div>
                        <div className=''>대표</div>
                        <div className=''>SYS NOVA</div>
                   </div>
               </BoxLayout>
        </InfoBoxComponent>
    )
}
export default InfoUser