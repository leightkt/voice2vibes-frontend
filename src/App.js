import './App.css';
import { Component } from 'react'
import Dictaphone from './Components/Dictaphone';
import Directives from './Containers/Directives';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {

    state = {
        isUpdating: false,
        transcript: "",
        device: "",
        characteristic: "",
        server: "",
        service: "",
        directives: [
            {
                id: 1,
                name: "on",
                command: "on",
                hexCode: [0x0F, 0x03, 0x00, 0x02, 0x02, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x03, 0x00, 0x07, 0x07, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 2,
                name: "off",
                command: "off",
                hexCode: [0x1E, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x1E, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])
                    )
            },
            {
                id: 3,
                name: "vibrate",
                command: "vibrate",
                hexCode: [0x0F, 0x03, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x03, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 4,
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
                name: "cha cha",
                command: "cha cha",
                hexCode: [0x0F, 0x09, 0x00, 0x04, 0x04, 0x00, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x09, 0x00, 0x04, 0x04, 0x00, 0x00, 0x00])
                    )
            },
            {
                id: 7,
                name: "tease",
                command: "tease",
                hexCode: [0x0F, 0x11, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x11, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 8,
                name: "tempo",
                command: "tempo",
                hexCode: [0x0F, 0x16, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x16, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 9,
                name: "step",
                command: "step",
                hexCode: [0x0F, 0x09, 0x00, 0x05, 0x05, 0x00, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x09, 0x00, 0x05, 0x05, 0x00, 0x00, 0x00])
                    )
            },
            {
                id: 10,
                name: "massage",
                command: "massage",
                hexCode: [0x0F, 0x10, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x10, 0x00, 0x04, 0x04, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 11,
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
                name: "medium",
                command: "medium",
                hexCode: [0x0F, 0xFF, 0x00, 0x0A, 0x0A, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0xFF, 0x00, 0x0A, 0x0A, 0x03, 0x00, 0x00])
                    )
            },
            {
                id: 14,
                name: "high",
                command: "max",
                hexCode: [0x0F, 0xFF, 0x00, 0x0E, 0x0E, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0xFF, 0x00, 0x0E, 0x0E, 0x03, 0x00, 0x00])
                    )
            }
        ]
    }

    // componentDidMount() {
    // }

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
        this.setState({ transcript })
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

    checkStatus = () => {
        if (!this.state.isUpdating) {
            return this.state.directives
        } else {
            return {}
        }
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
                />
                <main>
                    {this.state.device
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
                                />
                            </>
                    : null
                    }
                </main>
                <Footer />
            </div>
        )
    }
}

export default App;
