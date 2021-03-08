import Github from '../Assets/github.png'
import Honey from '../Assets/honey.jpeg'

function Footer() {
    return(
        <footer>
            <img className="github" src={Github} alt="Github icon" />
            <div className="about">
                <p>ABOUT THE DEV</p>
                <h2>Kat</h2>
                <p>Full stack software engineer located in Denver, CO. 
                </p>
                <p>Passionate about inclusive technology.
                </p>
            </div>
            <img className="honey" src={Honey} alt="fingers dipping into honey" />
        </footer>
    )
}

export default Footer