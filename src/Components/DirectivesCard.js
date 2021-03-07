import offIcon from '../Assets/Icons/off.png'
import onIcon from '../Assets/Icons/on.png'

function DirectivesCard({ directive, setDirective, transcript }) {

    const findIcon = () => {
        switch(directive.name) {
            case "on":
                return onIcon
            case "off":
                return offIcon
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
            <p>{transcript
            ? `"${transcript}"`
            : `"${directive.command}"` }
            </p>
        </div>
    )
}

export default DirectivesCard