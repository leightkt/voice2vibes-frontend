import './About.css'

const About = (props) => {

    const back = () => {
        props.history.push('/')
    }

    return(
        <section className="about-section">
            <h2 className="about-title">LEVEL UP YOUR VIBRATOR</h2>
            <p className="about-text">NOTE: This app is built to use the Web Bluetooth API and will not work on mobile browsers at this time.
            To use this app, you must enable experimental web platform features preferenes (set to enabled) by visiting chrome://flags (allows Web Bluetooth API).</p>
            <div className="about-div">
                <p className="about-text">
                <h4>ABOUT</h4>
                This App is built for 
                the <a href="https://www.we-vibe.com/us/moxie">Moxie</a> by <a href="https://www.we-vibe.com/us/">We-Vibe</a>. 
                The Moxie is a bluetooth connectable wearable vibrator for people with vulvas. 
                We-Vibe makes an app for your phone that connects to the vibrator and allows
                a user to interact with the vibrator via touch settings. You can also connect to a partner remotely
                and allow them to interact with the vibrator over WiFi.
                </p>
                <p className="about-text">
                <h4>CONNECT</h4>
                This app uses the Web Bluetooth API technology to connect to your vibrator 
                from your browser and the Web Speech API
                to allow you to send commands via your voice.
                When you log in (or sign up) click the "connect" button
                which will open up a dialogue box. Make sure your vibrator is on (press and hold 
                the power button for 5 seconds until it flashes and buzzes twice) and click the option
                that says, "Moxie."
                </p>
                <p className="about-text">
                <h4>TALK DIRTY</h4>
                When a user logs in, a list of commands will open. 
                When the device is connected, you can call any command via voice by clicking the "start" button. Or, click a command card
                to set your own custom voice command for each action. 
                </p>
            </div>
            <h3>CONTINOUS LISTEN MODE</h3>
            <p className="about-text">
                Click "LISTEN MODE" to enter continous listen mode. The App will pick up your commands
                as you speak so you and your partner can go truly hands free. 
            </p>
            <button className="about-button" onClick={ back }>BACK</button>
        </section>
    )
}

export default About