import './Directives.css'
import DirectivesCard from "../Components/DirectivesCard"
import { useState } from 'react'

function Directives({ directives, transcript, updateDirectives, isUpdating, toggleUpdate, saveNewDirective }) {
    const [directive, setDirective] = useState({})

    const displayDirectiveCards = () => {
        return directives.map(directive => <DirectivesCard 
            directive={ directive }
            key={ directive.id }
            setDirective={ setDirective }/>)
    }

    const handleClick = (event) => {
        if(event.target.className === "directives-card"){
            toggleUpdate()
        }
    }

    const handleSave = () => {
        setDirective(directive.command = transcript)
        toggleUpdate()
        updateDirectives(directive)
        saveNewDirective(directive)
    }

    return(
        <section className="directives" onClick={ handleClick }>
            {isUpdating
            ? <>
                <button onClick={ handleSave }>SAVE</button>
                <DirectivesCard directive={ directive } transcript={ transcript }/>
            </>
            :   displayDirectiveCards() }
        </section>
    )
}

export default Directives