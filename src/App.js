import './App.css';

import Dictaphone from './Components/Dictaphone';
import Directives from './Containers/Directives';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About'
import Logout from './Components/Logout';

import { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
const BackendURL = 'http://localhost:9000/'

class App extends Component {

    state = {
        user: {},
        isUpdating: false,
        transcript: "",
        device: "",
        characteristic: "",
        server: "",
        service: "",
        directives: [
            {
                id: 1,
                usercommand_id: null,
                name: "on",
                command: "on",
                hexCode: [0x0F, 0x03, 0x00, 0x02, 0x02, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x03, 0x00, 0x07, 0x07, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 2,
                usercommand_id: null,
                name: "off",
                command: "off",
                hexCode: [0x1E, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x1E, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])
                    )
            },
            {
                id: 3,
                usercommand_id: null,
                name: "vibrate",
                command: "vibrate",
                hexCode: [0x0F, 0x03, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x03, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 4,
                usercommand_id: null,
                name: "pulse",
                command: "pulse",
                hexCode: [0x0F, 0x05, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x05, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 5,
                name: "wave",
                command: "wave",
                hexCode: [0x0F, 0x07, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x07, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 6,
                usercommand_id: null,
                name: "cha cha",
                command: "cha cha",
                hexCode: [0x0F, 0x09, 0x00, 0x04, 0x04, 0x00, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x09, 0x00, 0x04, 0x04, 0x00, 0x00, 0x00])
                    )
            },
            {
                id: 7,
                usercommand_id: null,
                name: "tease",
                command: "tease",
                hexCode: [0x0F, 0x11, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x11, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 8,
                usercommand_id: null,
                name: "tempo",
                command: "tempo",
                hexCode: [0x0F, 0x16, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x16, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 9,
                usercommand_id: null,
                name: "step",
                command: "step",
                hexCode: [0x0F, 0x09, 0x00, 0x05, 0x05, 0x00, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x09, 0x00, 0x05, 0x05, 0x00, 0x00, 0x00])
                    )
            },
            {
                id: 10,
                usercommand_id: null,
                name: "massage",
                command: "massage",
                hexCode: [0x0F, 0x10, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x10, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 11,
                usercommand_id: null,
                name: "ramp",
                command: "ramp",
                hexCode: [0x0F, 0x15, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x15, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 12,
                name: "low",
                command: "low",
                hexCode: [0x0F, 0xFF, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0xFF, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 13,
                usercommand_id: null,
                name: "medium",
                command: "medium",
                hexCode: [0x0F, 0xFF, 0x00, 0x0A, 0x0A, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0xFF, 0x00, 0x0A, 0x0A, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 14,
                usercommand_id: null,
                name: "high",
                command: "max",
                hexCode: [0x0F, 0xFF, 0x00, 0x0E, 0x0E, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0xFF, 0x00, 0x0E, 0x0E, 0x03, 0x00, 0x00])
                    )
            }
        ]
    }

    componentDidMount() {
        this.authorize_user()
    }

    authorize_user = () => {
        fetch(`${BackendURL}profile`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.setUser(user)
                this.setDirectives(user.usercommands)
            }
        })
    }

    setDevice = (device) => {
        this.setState({ device })
    }

    setCharacteristic = (characteristic) => {
        this.setState({ characteristic })
    }

    setServer = (server) => {
        this.setState({ server })
    }

    setService = (service) => {
        this.setState({ service })
    }

    setTranscript = (transcript) => {
        let uncensoredtranscript = this.uncensor(transcript)
        this.setState({ transcript: uncensoredtranscript })
    }

    setUser = (user) => {
        this.setState({ 
            user: {
                id: user.id,
                username: user.username,
            } 
        })
    }

    setDirectives = (usercommands) => {
        const newdirectives = []
        usercommands.forEach(usercommand => {
            this.state.directives.forEach(directive => {
                if(usercommand.command_id === directive.id){
                    const newcommand = {
                        id: directive.id,
                        usercommand_id: usercommand.id,
                        name: directive.name,
                        command: directive.command,
                        hexCode: directive.hexCode,
                        callback: directive.callback
                    }
                    if(usercommand.phrase !== ""){
                        newcommand.command = usercommand.phrase
                    }
                    newdirectives.push(newcommand)
                }
            })
        })

        this.setState({ directives: newdirectives })
    }

    toggleUpdate = () => {
        this.setState({
            isUpdating: !this.state.isUpdating
        })
    }

    updateDirectives = (updatedDirective) => {
        this.setState({
            transcript: ""
        })
        const updatedDirectives = this.state.directives.filter(directive => {
            return directive.id !== updatedDirective.id
        })
        this.setState({
            directives: [...updatedDirectives, updatedDirective]
        })
    }

    saveNewDirective = (directive) => {
        fetch(`${BackendURL}usercommands/${directive.usercommand_id}`, {
            method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({
                    phrase: directive.command
                })
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
    }

    checkStatus = () => {
        if (!this.state.isUpdating) {
            return this.state.directives
        } else {
            return {}
        }
    }

    uncensor = (transcript) =>  {
        let uncensored = transcript
        uncensored = uncensored.replace(/cont/g, 'cunt')
        uncensored = uncensored.replace(/(p\*\*\*\*)/g, 'pussy')
        uncensored = uncensored.replace(/(s\*\*\*)/g, 'shit')
        uncensored = uncensored.replace(/(f\*\*\*)/g, 'fuck')
        uncensored = uncensored.replace(/(fuck\*\*\*)/g, 'fucking')
        uncensored = uncensored.replace(/(fuckr)/g, 'fucker')
        uncensored = uncensored.replace(/(b\*\*\*\*)/g, 'bitch')
        uncensored = uncensored.replace(/(a\*\*\*\*\*\*)/g, 'asshole')
        return uncensored
    }

    render() {
        return (
            <div className="App">
                <Header 
                    device={ this.state.device }
                    characteristic={ this.state.characteristic }
                    setDevice={ this.setDevice }
                    setCharacteristic={ this.setCharacteristic }
                    setServer={ this.setServer }
                    setService={ this.setService }
                    setUser={ this.setUser }
                    user={ this.state.user }
                    setDirectives={ this.setDirectives }
                />
                <Switch>
                    <main>
                        { this.state.device
                            ?   <>
                                    
                                    <Dictaphone 
                                        commands={ this.checkStatus() }
                                        setTranscript={ this.setTranscript }
                                        stateTranscript={ this.state.transcript }
                                    />
                                    <Directives 
                                        transcript={ this.state.transcript }
                                        directives={ this.state.directives }
                                        updateDirectives={ this.updateDirectives }
                                        isUpdating={ this.state.isUpdating }
                                        toggleUpdate={ this.toggleUpdate }
                                        saveNewDirective={ this.saveNewDirective }
                                    />
                                </>
                        : null
                        }
                        { this.state.user
                        ? <Logout setUser={this.setUser }/>
                        : null 
                        }
                    </main>
                <Route path="/about" render={(routerProps) => <About />} />
                <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App;
