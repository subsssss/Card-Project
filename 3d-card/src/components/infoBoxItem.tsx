
interface InfoBoxProps{
    children:JSX.Element|string|JSX.Element[]
}
const InfoBoxItem=({children}:InfoBoxProps)=>{
    return(
        <div className=" w-full 
        bg-gray-600 border-y border-gray-700
        shadow-2xl p-4 gap-4">
            {children}
        </div>
    )
}

export default InfoBoxItem