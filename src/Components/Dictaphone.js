import { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function Dictaphone({ commands, setTranscript, stateTranscript }) {
    const { transcript, resetTranscript } =  useSpeechRecognition({ commands })
    let interval = null


    useEffect(() => {
        setTranscript(transcript)
    }, [transcript])

    

    const StartContinousListening = () => {
        SpeechRecognition.startListening( {continuous: true })
        useEffect(() => {
            interval = setInterval(() => {
                resetTranscript()
            }, 100000)
        }, [])
    }

    const stopListening = () => {
        SpeechRecognition.stopListening()
        clearInterval(interval)
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