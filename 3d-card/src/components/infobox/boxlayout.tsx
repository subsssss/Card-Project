interface IBoxLayout{
    children:JSX.Element|JSX.Element[]
}

const BoxLayout=({children}:IBoxLayout)=>{
    return(
        <div className="border border-[#5e65f6]
        w-full mt-5 p-5 rounded-2xl text-lg
        font-bold grid gap-3 shadow-lg bg-[#5e65f6]
          text-left
        ">
            {children}
        </div>
    )
}

export default BoxLayout;