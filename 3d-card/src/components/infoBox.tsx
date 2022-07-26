import { useInfoStore } from '../store/infoStore';

import {motion} from 'framer-motion'
import InfoBoxItem from './infoBoxItem';
import SkillBox from './infobox/skillboxItem';


const InfoBox=()=>{

  const {view}=useInfoStore()

  const variants={
    show:{
      left:'60%',
      transition: { duration: 0.3 }
    },
    hide:{
      left:'100%',
      // transition: { duration: 0.3,delay:1 },
    },
    init:{
      left:'100%'
    }
  }

    return(
        <motion.div 
          animate={false?'show':'hide'}
          initial={'init'}
          variants={variants}
          className='
          absolute
          top-0 
           w-[40%] h-full
          bg-gray-300/30
          gap-5 grid py-10
           text-left
          '>
           
           <InfoBoxItem> 
             <div className=' absolute top-0'>
                <div className=' rounded-full 
                  w-20 h-20 bg-blue-300'>
                </div>
             </div>
              <div className=' mt-14 text-base grid items-start'>
                <div className=' '>홍길동</div>
                <div className=''>투자심사역|벤처투자본부</div>
                <div className=''>LC 인베스트먼트</div>
              </div>
            </InfoBoxItem>
            <InfoBoxItem> 
              <div className='  text-xl font-bold mb-5'>자기소개</div>

              <div className='text-base flex items-start break-normal md:break-all'>
                VC본부 투자심사역으로 이직 6년간 플랫폼 및 기술
                콘텐츠 투자 딜을 진행해왔습니다.
                주로 Series A-B단계 딜에 대한 경험이 많습니다.
              </div>
            </InfoBoxItem>
            <InfoBoxItem> 
              <div className='text-xl font-bold mb-5'>전문분야</div>
              <div className='flex gap-4 flex-wrap'>
                <SkillBox>
                  React
                </SkillBox>
                <SkillBox>
                  TypeScript
                </SkillBox>
                <SkillBox>
                  TypeScript
                </SkillBox>
                <SkillBox>
                  TypeScript
                </SkillBox>
                <SkillBox>
                  TypeScript
                </SkillBox>
                <SkillBox>
                  TypeScript
                </SkillBox>
                <SkillBox>
                  TypeScript
                </SkillBox>
     
              </div>
            </InfoBoxItem>
            <InfoBoxItem> 
              <div className='text-xl font-bold mb-5'>경력사항</div>
            </InfoBoxItem>
        </motion.div>
      
    )
}
export default InfoBox