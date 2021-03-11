import './Main.css'
import Dictaphone from '../Components/Dictaphone'
import Directives from './Directives'
import Logout from '../Components/Logout'

const Main = ({ 
    checkStatus, 
    setTranscript, 
    stateTranscript, 
    transcript, 
    directives, 
    updateDirectives, 
    isUpdating, 
    toggleUpdate, 
    saveNewDirective,
    setUser,
    device, 
    user
}) => {

    return (
        <main>
            { device
                ?   <>
                        
                        <Dictaphone 
                            commands={ checkStatus }
                            setTranscript={ setTranscript }
                            stateTranscript={ stateTranscript }
                        />
                        <Directives 
                            transcript={ transcript }
                            directives={ directives }
                            updateDirectives={ updateDirectives }
                            isUpdating={ isUpdating }
                            toggleUpdate={ toggleUpdate }
                            saveNewDirective={ saveNewDirective }
                        />
                    </>
            : null
            }
            { user
            ? <Logout setUser={ setUser }/>
            : null 
            }
        </main>
    )
}

export default Main