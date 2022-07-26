import BoxLayout from "./boxlayout"
import InfoBoxComponent from "./infoBox"
import SkillBoxItem from "./skillboxItem"

const Skill=()=>{


    return(
        <InfoBoxComponent>
            <BoxLayout>
                    <div className="text-xl">보유기술</div>
                    <div className=" flex gap-3 flex-wrap">
                    <SkillBoxItem>
                  TypeScript
                </SkillBoxItem>
                <SkillBoxItem>
                  TypeScript
                </SkillBoxItem>
                <SkillBoxItem>
                  TypeScript
                </SkillBoxItem>
                <SkillBoxItem>
                  TypeScript
                </SkillBoxItem>
                <SkillBoxItem>
                  TypeScript
                </SkillBoxItem>
                    </div>
              </BoxLayout>       
        </InfoBoxComponent>
    )
}
export default Skill