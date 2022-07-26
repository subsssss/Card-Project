import { motion } from "framer-motion"
import AboutMe from "./aboutMe"
import InfoBoxComponent from "./infoBox"

import InfoUser from "./infouser"
import Skill from "./skill"
import Career from './career';

const InfoScrollBox=()=>{
    return(
        <motion.div className=" h-full">
            <InfoUser/>
            <AboutMe/>
            <Skill/>
            <Career/>
        </motion.div>
    )
}
export default InfoScrollBox