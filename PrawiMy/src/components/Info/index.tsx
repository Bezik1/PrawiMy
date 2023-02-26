import { useEffect, useRef } from "react"
import Socials from "../Socials"
import SocialsCanvas from "../SocialsCanvas"
import gsap from "gsap"
import './index.css'

const Info = () =>{
    const socialsRef = useRef<HTMLDivElement>(null!)
    const circleRef = useRef<HTMLDivElement>(null!)
  
    useEffect(() =>{
        const moveCircle = (e: MouseEvent) =>{
            const tl = gsap.timeline()
            if(e.pageY <= 700 || e.pageY >= 1250 || e.pageX <= 450 || e.pageX >= (0.9 * window.innerWidth)){
                tl.to(circleRef.current, {
                    delay: 0.003,
                    opacity: 0,
                })
            } else if(e.pageX >= 1100 && e.pageY >= 1000){
                tl.to(circleRef.current, {
                    duration: 0.5,
                    delay: 0.003,
                    opacity: 0,
                })
            }
             else {
                tl.to(circleRef.current, {
                    opacity: 1,
                    x: (e.pageX  - 100),
                    y: (e.pageY - 900)
                })
            }
        }
  
        socialsRef.current.addEventListener('mousemove', moveCircle)
      
        return () => socialsRef.current.removeEventListener('mousemove', moveCircle)
    })
  
    useEffect(() => {
        gsap.fromTo(socialsRef.current, {
          y: -100,
          opacity: 0,
          repeat: -1,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "bounce",
            scrollTrigger: {
                start: '220px 50%',
                trigger: socialsRef.current,
            }
        });
      }, []);

    return (
        <div className='info-container' ref={socialsRef}>
            <div className='circle' ref={circleRef} />
            <SocialsCanvas />
            <Socials />
            <div className="info-wobble" />
            <div className="info-wobble-2" />
        </div>
    )
}

export default Info