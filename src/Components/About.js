import './About.css'

const About = (props) => {

    const back = () => {
        props.history.push('/')
    }

    return(
        <section className="about-section">
            <h2>About This App</h2>
            <button className="about-button" onClick={ back }>BACK</button>
        </section>
    )
}

export default About