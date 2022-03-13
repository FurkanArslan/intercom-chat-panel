import React, { useState } from 'react'
import './style.css'
import WelcomePage from '../welcome'
import ContinueConversationPage from '../continueConversation/index';
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
        </div>
    )

}

