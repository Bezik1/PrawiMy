import { createContext, useContext } from "react";

const ViewContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>> | undefined, [number, number]]>([
    false, 
    undefined,
    [0, 0]
])

type ViewContextProvider = {
    children: React.ReactNode | React.ReactNode[],
    isView: boolean,
    setView:  React.Dispatch<React.SetStateAction<boolean>>,
    mousePos: [number, number]
}

export const ViewContextProvider = ({ children, isView, setView, mousePos } : ViewContextProvider) =>{
    return (
        <ViewContext.Provider value={[isView, setView, mousePos]}>
            { children }
        </ViewContext.Provider>
    )
}

export const useViewContextProvider = () =>{
    const [isView, setView, mousePos] = useContext(ViewContext)

    if(typeof setView === 'undefined') throw new Error('Element is not inside ViewContext Provider')

    return {isView, setView, mousePos}
}