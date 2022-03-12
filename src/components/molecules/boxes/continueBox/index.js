import React, { Component } from 'react'
import './style.css'
export default class ContinueConversation extends Component {
    render() {
        return (
            <div className='continueConvBox'>
                <div className='continueHeader'>
                    <h3>Continue the conversation</h3>

                </div>
                <div className='goToConversation'>
                    <div className='goToConversationContainer'>
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
}
