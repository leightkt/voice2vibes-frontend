import './Dictaphone.css'
import { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function Dictaphone({ commands, setTranscript, stateTranscript }) {
    const { transcript, resetTranscript } =  useSpeechRecognition({ commands })
    const [continuousListen, setContinousListen ] = useState(false)

    useEffect(() => {
        setTranscript(transcript)
    }, [transcript])

    useEffect(() => {
        if (continuousListen === true){
            const interval = setInterval(() => {
                resetTranscript()
            }, 20000)
            return () => clearInterval(interval)
        }
    }, [continuousListen])

    const StartContinousListening = () => {
        setContinousListen(true)
        SpeechRecognition.startListening( {continuous: true })

    }

    const stopListening = () => {
        setContinousListen(false)
        SpeechRecognition.stopListening()
    }

    if(!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <div className="dictaphone">
            <p>{ stateTranscript }</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={resetTranscript}>Reset</button>
            <button onClick={StartContinousListening}>LISTEN MODE</button>
            <button onClick={stopListening}>STOP</button>
        </div>
    )
}

export default Dictaphone