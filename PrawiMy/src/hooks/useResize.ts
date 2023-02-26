import { useEffect, useState } from "react"

export const useResize = () =>{
    const [ifWidth, setIfWidth] = useState<boolean>(true)

    
    useEffect(() =>{
        const handleResize = () =>{
          if(window.innerWidth > 600) {
            setIfWidth(true)
          } else {
            setIfWidth(false)
          }
        }
    
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }, [])

      return ifWidth
}