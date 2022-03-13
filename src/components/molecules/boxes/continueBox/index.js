import React from 'react'
import './style.css'
export default function ContinueConversation({ onClick }) {
    return (
        <div className='continueConvBox'>
            <div className='continueHeader'>
                <h3>Continue the conversation</h3>

            </div>
            <div className='goToConversation'>
                <div className='goToConversationContainer' onClick={() => { onClick() }}>
                    <div className='goToConvOperator'>
                        <img src="./operator.png" width="36px"></img>
                    </div>
                    <div className='goToConvText'>
                        <div className='goToConversationTextFirst'>Operator • 1d ago</div>
                        <div className='goToConversationTextSecond'>Hi there 👋 What brings y...</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
