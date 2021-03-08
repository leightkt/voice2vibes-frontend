import Github from '../Assets/github.png'

function Footer() {
    return(
        <footer>
            <p>ABOUT THE DEV</p>
            <div className="about">
                <h2>Kat</h2>
                <p>Full stack software engineer located in Denver, CO. 
                </p>
                <p>Passionate about inclusive technology.
                </p>
            </div>
            <img src={Github} alt="Github icon" />
        </footer>
    )
}

export default Footer