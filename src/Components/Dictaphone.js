import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function Dictaphone({ commands }) {

    const { transcript, resetTranscript } = useSpeechRecognition({ commands })

    if(!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    

    return (
        <div>
            <p>{transcript}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            {/* <button offClick={SpeechRecognition.stopListening}>Stop</button> */}
            <button onClick={resetTranscript}>Reset</button>
        </div>
    )
}

export default Dictaphone