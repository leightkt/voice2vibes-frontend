import offIcon from '../Assets/Icons/off.png'
import onIcon from '../Assets/Icons/on.png'

function DirectivesCard({ directive }) {

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
    return(
        <div>
            <img src={ findIcon() } alt={ directive.name }/>
            <p>{ directive.name }</p>
            <p>"{ directive.command }"</p>
        </div>
    )
}

export default DirectivesCard