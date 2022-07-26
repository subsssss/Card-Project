import { motion } from "framer-motion"


interface IInfoBoxProps{
    children:JSX.Element[]|JSX.Element
}

const InfoBoxComponent=({children}:IInfoBoxProps)=>{

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
        <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{amount: 0.8,fallback:true,once:true}}
        className="w-full flex items-center justify-center">
            <motion.div variants={variants}
        className="w-full h-full relative p-5">
                {children}
            </motion.div>
        </motion.div>
    )
}

export default InfoBoxComponent