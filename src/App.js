import './App.css';
import { Component } from 'react'
import Bluetooth from './Components/Bluetooth'
import Dictaphone from './Components/Dictaphone';
import Directives from './Containers/Directives';

class App extends Component {

    state = {
        device: "",
        characteristic: "",
        server: "",
        service: "",
        directives: [
            {
                name: "on",
                command: "on",
                hexCode: [0x0F, 0x03, 0x00, 0x07, 0x07, 0x03, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x0F, 0x03, 0x00, 0x07, 0x07, 0x03, 0x00, 0x00])
                    )
            },
            {
                name: "off",
                command: "off",
                hexCode: [0x1E, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
                callback: () => this.state.characteristic.writeValue(
                    new Uint8Array([0x1E, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])
                    )
            }
        ]
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
    
    turnOn = () => {
        this.state.characteristic.writeValue(
            new Uint8Array([0x0F, 0x03, 0x00, 0x07, 0x07, 0x03, 0x00, 0x00])
            )
    }

    turnOff = () => {
        this.state.characteristic.writeValue(
            new Uint8Array([0x1E, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])
            )
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Voice2Vibes</h1>
                    {this.state.device
                    ? <p>Connected</p>
                    : <p>Not Connected</p>}
                    <Bluetooth 
                        setDevice={ this.setDevice }
                        setCharacteristic={ this.setCharacteristic }
                        setServer={ this.setServer }
                        setService={ this.setService }/>
                    <button onClick={ this.turnOn }>ON</button>
                    <button onClick={ this.turnOff }>OFF</button>
                </header>
                <main>
                    <Dictaphone commands={ this.state.commands }/>
                    <Directives directives={ this.state.directives }/>
                </main>
            </div>
        )
    }
}

export default App;
