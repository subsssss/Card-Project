import BoxLayout from "./boxlayout"
import InfoBoxComponent from "./infoBox"

const Career=()=>{
    return(
        <InfoBoxComponent>
            <BoxLayout>
                <div className="text-xl">경력사항</div>
                <div className="text-base font-medium ml-3">
                    <div className="">
                    설팅 영업 전문가로 다수의 대형 사업 수주 경험 (Big Deal Maker) 
                    </div>
                    <div>
                    신규사업 기획 및 육성 전문가 
                    </div>
                    <div>
                    다수의 SAP/SI 대형 프로젝트 PM 수행 및 Advisory/QA 수행경험 보유 
                    </div>
                    <div>
                    다양한 Industry를 아우르는 풍부한 Network 보유 
                    </div>
                </div>
            </BoxLayout>
        </InfoBoxComponent>
    )
}
export default Career