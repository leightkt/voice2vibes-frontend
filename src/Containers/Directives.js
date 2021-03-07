import DirectivesCard from "../Components/DirectivesCard"

function Directives({ directives }) {
    const displayDirectiveCards = () => {
        return directives.map(directive => <DirectivesCard directive={ directive }/>)
    }
    return(
        <section>
            { displayDirectiveCards() }
        </section>
    )
}

export default Directives