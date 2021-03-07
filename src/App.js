import './App.css';
import { Component } from 'react'
import Bluetooth from './Components/Bluetooth'

class App extends Component {

    state = {
        device: "",
        characteristic: "",
        server: "",
        service: "",
        commands: []
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
            ).then(console.log)
    }

    turnOff = () => {
        this.state.characteristic.writeValue(
            new Uint8Array([0x1E, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])
            ).then(console.log)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Voice2Vibes</h1>
                    <Bluetooth 
                        setDevice={ this.setDevice }
                        setCharacteristic={ this.setCharacteristic }
                        setServer={ this.setServer }
                        setService={ this.setService }/>
                    <button onClick={ this.turnOn }>ON</button>
                    <button onClick={ this.turnOff }>OFF</button>
                </header>
            </div>
        )
    }
}

export default App;
