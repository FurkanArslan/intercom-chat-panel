import React, { useState } from 'react'
import './style.css'
import WelcomePage from '../welcome'
import ContinueConversationPage from '../continueConversation/index';
import StartConversationPage from '../startConversation/index'
export default function Chat() {
    const [showingPage, setShowingPage] = useState("");
    return (
        <div className='chatScreenBody'>
            {
                (showingPage === "" || showingPage === "welcome") && (<WelcomePage goToPage={(data) => { setShowingPage(data) }} />)
            }
            {
                (showingPage === "ContinueConversation") && (<ContinueConversationPage goBack={() => { setShowingPage("") }} />)
            }
            {
                (showingPage === "StartConversation") && (<StartConversationPage goBack={() => { setShowingPage("") }} />)
            }
        </div>
    )

}

