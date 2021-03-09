import './DirectivesCard.css'
import offIcon from '../Assets/Icons/off.png'
import onIcon from '../Assets/Icons/on.png'
import vibrateIcon from '../Assets/Icons/vibrate.png'
import pulseIcon from '../Assets/Icons/pulse.png'
import waveIcon from '../Assets/Icons/wave.png'
import chachaIcon from '../Assets/Icons/cha-cha.png'
import teaseIcon from '../Assets/Icons/tease.png'
import tempoIcon from '../Assets/Icons/tempo.png'
import stepIcon from '../Assets/Icons/step.png'
import massageIcon from '../Assets/Icons/massage.png'
import rampIcon from '../Assets/Icons/ramp.png'
import highIcon from '../Assets/Icons/max.png'
import lowIcon from '../Assets/Icons/low.png'
import mediumIcon from '../Assets/Icons/medium.png'

function DirectivesCard({ directive, setDirective, transcript }) {

    const findIcon = () => {
        switch(directive.name) {
            case "on":
                return onIcon
            case "off":
                return offIcon
            case "vibrate":
                return vibrateIcon
            case "pulse":
                return pulseIcon
            case "wave":
                return waveIcon
            case "cha cha":
                return chachaIcon
            case "tease":
                return teaseIcon
            case "tempo":
                return tempoIcon
            case "step":
                return stepIcon
            case "massage":
                return massageIcon
            case "ramp":
                return rampIcon
            case "high":
                return highIcon
            case "medium":
                return mediumIcon
            case "low":
                return lowIcon
            default:
                return null
        }
    }

    const handleClick = () => {
        if (setDirective) {
            setDirective(directive)
        } else {
            return null
        }
    }

    return(
        <div className="directives-card" onClick={ handleClick }>
            <img src={ findIcon() } alt={ directive.name }/>
            <p>{ directive.name }</p>
            <p>{ transcript
            ? `"${ transcript }"`
            : `"${ directive.command }"` 
            }
            </p>
        </div>
    )
}

export default DirectivesCard