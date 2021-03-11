import './Footer.css'
import Github from '../Assets/github.png'
import Honey from '../Assets/honey.jpeg'

function Footer() {
    return(
        <footer>
            <a 
                target="_blank" 
                rel="noreferrer" 
                className="git-link" 
                href="https://github.com/leightkt">
                    <img className="github" src={Github} alt="Github icon" />
            </a>
            <div className="about">
                <p className="bio">ABOUT THE DEV</p>
                <h2>Kat</h2>
                <p>Full stack software engineer located in Denver, CO. 
                    Passionate about inclusive technology.
                </p>
            </div>
            <img className="honey" src={Honey} alt="fingers dipping into honey" />
        </footer>
    )
}

export default Footer