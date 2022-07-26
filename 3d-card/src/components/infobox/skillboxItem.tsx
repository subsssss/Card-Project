interface ISkillBoxProps{
    children:string
}

const SkillBoxItem=({children}:ISkillBoxProps)=>{
    return(
        <div className="border rounded-3xl w-auto text-base
        p-2
        ">
            {children}
        </div>
    )
}

export default SkillBoxItem