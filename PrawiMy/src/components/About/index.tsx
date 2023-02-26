import { useViewContextProvider } from "../../contexts/ViewContext"
import { useEffect, useRef } from "react"
import './index.css'
import gsap from "gsap"
import { ABOUT_TEXT, ABOUT_WORDS } from "../../constans"

const About = () =>{
    const { isView, setView } = useViewContextProvider()
    const aboutRef = useRef<HTMLDivElement>(null!)

    useEffect(() => {
        gsap.fromTo(aboutRef.current, {
          opacity: 0,
          scale: 0,
        }, {
            scale: 1,
            easy: 'bounce',
            duration: 1,
            opacity: 1,
        });
      }, []);

      useEffect(() =>{
        let tl = gsap.timeline({ repeat: -1, delay: 0.5, repeatDelay: 5 });
        
        tl.fromTo('.text', {
            repeatWithPause: true,
            opacity: 0,
            duration: 1,
            rotate: -45,
        }, {
            opacity: 1,
            rotate: 0,
            stagger: {
                each: 0.05,
            },
        })
      }, [])

    return (
        <div className="about" ref={aboutRef}>
            <h1> 
                {ABOUT_WORDS.map(word => {
                    if(word === ' '){
                        return <div className="text" style={{marginLeft: '2%'}} />
                    } else if(word === 'My') {
                        return <span className="text"><b>{word}</b></span>
                    } else {
                        return <span className="text">{word}</span>
                    }
                 })
                }
            </h1>
            <div className="content">{ABOUT_TEXT}</div>
            <button className={`oc btn ${isView ? 'oc-active' : null}`} onClick={() => setView(!isView)}>
                3D View
            </button>
        </div>
    )
}

export default About