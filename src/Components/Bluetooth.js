import './Bluetooth.css'
function Bluetooth({ setDevice, setCharacteristic, setServer, setService }) {

    const connectToDevice = async () => {
        const device = await navigator.bluetooth
        .requestDevice({
            filters: [
                { namePrefix: "Moxie" },
                { services: [ 'f000bb03-0451-4000-b000-000000000000' ]}
            ]
        })
        setDevice(device)
        const server = await device.gatt.connect()
        setServer(server)
        const service = await server.getPrimaryService('f000bb03-0451-4000-b000-000000000000')
        setService(service)
        const characteristic = await service.getCharacteristic('f000c000-0451-4000-b000-000000000000')
        setCharacteristic(characteristic)
    }

    

    return (
        <>
        <button className="bluetooth" onClick={connectToDevice}>CONNECT</button>
        </>
    )

}

export default Bluetooth