import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import './index.css'
import { SOCIALS_TEXT, SOCILAS_WORDS } from "../../constans"

gsap.registerPlugin(ScrollTrigger)

const Socials = () =>{

    return (
        <div className="socials-container">
            <div className="socials">
                <h1>
                {SOCILAS_WORDS.map(word => {
                    if(word === ' '){
                        return <div className="socials-text" style={{marginLeft: 10}} />
                    } else if(word === 'My') {
                        return <span className="socials-text"><b>{word}</b></span>
                    } else {
                        return <span className="socials-text">{word}</span>
                    }
                 })
                }
                </h1>
                <div className="social-content">{SOCIALS_TEXT}</div>
            </div>
        </div>
    )
}

export default Socials