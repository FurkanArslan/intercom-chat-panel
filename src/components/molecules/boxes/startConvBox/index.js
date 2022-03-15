import React from 'react'
import './style.css'
export default function StartConversationBox({ onClick }) {

    return (
        <div className='startConvBox' >
            <div className='continueHeader'>
                <h3> Start another conversation</h3>
            </div>
            <div className='scbGoToConversation'>
                <div className='goToConversationContainer'>
                    <div className='goToConvOperator'>
                        <img src="./operator.png" width="36px"></img>
                    </div>
                    <div className='goToConvText'>
                        <div className='goToConversationTextFirst'>Our usual reply time</div>
                        <div className='goToConversationTextSecond'>A few minutes</div>
                    </div>
                </div>
            </div>
            <div className='messageField'>
                <button className='sendMessageButton' onClick={() => { onClick(true) }}>Send us a message</button>
            </div>
        </div>
    )

}
