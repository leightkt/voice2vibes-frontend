import { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function Dictaphone({ commands, setTranscript, stateTranscript }) {

    const { transcript, resetTranscript } =  useSpeechRecognition({ commands })



    useEffect(() => {
        setTranscript(transcript)
    }, [transcript])

    if(!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <div className="dictaphone">
            <p>{ stateTranscript }</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={resetTranscript}>Reset</button>
        </div>
    )
}

export default Dictaphone