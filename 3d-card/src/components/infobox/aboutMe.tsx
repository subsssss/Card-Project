import BoxLayout from './boxlayout';
import InfoBoxComponent from './infoBox';

const AboutMe=()=>{
    return(
        <InfoBoxComponent>
            <BoxLayout>
                <div className='text-xl'>자기소개</div>
                <div className=' text-base font-medium'>
                VC본부 투자심사역으로 이직 6년간 플랫폼 및 기술
                콘텐츠 투자 딜을 진행해왔습니다.
                주로 Series A-B단계 딜에 대한 경험이 많습니다.
                </div>
            </BoxLayout>       
        </InfoBoxComponent>
    )
}
export default AboutMe;