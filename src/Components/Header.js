import Bluetooth from './Bluetooth'
import Grapefruit from '../Assets/grapefruit.jpeg'

function Header({ device, characteristic, setDevice, setCharacteristic, setServer, setService }) {

    const turnOn = () => {
        characteristic.writeValue(
            new Uint8Array([0x0F, 0x03, 0x00, 0x07, 0x07, 0x03, 0x00, 0x00])
            )
    }

    const turnOff = () => {
        characteristic.writeValue(
            new Uint8Array([0x1E, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])
            )
    }

    return(
        <header className="App-header">
            <img src={Grapefruit} alt="grapefruit" />
            <h1>Voice2Vibes</h1>
            {device
            ?   <> 
                    <p>Connected</p>
                    <div>
                        <button onClick={ turnOn }>ON</button>
                        <button onClick={ turnOff }>OFF</button>
                    </div>
                </>
            : <>
                <p>Not Connected</p>
                <Bluetooth 
                setDevice={ setDevice }
                setCharacteristic={ setCharacteristic }
                setServer={ setServer }
                setService={ setService }
                />
            </>
            }
            
        </header>
    )
}

export default Header