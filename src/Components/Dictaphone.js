import { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function Dictaphone({ commands, setTranscript, isUpdating }) {
    
    const checkStatus = () => {
        if (!isUpdating) {
            return { commands }
        } else {
            return {}
        }
    }

    const { transcript, resetTranscript } =  useSpeechRecognition(checkStatus())



    useEffect(() => {
        setTranscript(transcript)
    }, [transcript])

    if(!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <div className="dictaphone">
            <p>{transcript}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={resetTranscript}>Reset</button>
        </div>
    )
}

export default Dictaphone