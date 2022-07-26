import create from "zustand";


interface InfoState{
    view:boolean;
    setView:(view:boolean)=>void;
}


export const useInfoStore = create<InfoState>(set=>({
    view:false,
    setView:(view:boolean)=>set({view})
}))
