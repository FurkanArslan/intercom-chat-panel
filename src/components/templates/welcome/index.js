import React, { Component } from 'react'
import './style.css'
import ContinueConversation from '../../molecules/boxes/continueBox'
export default function Welcome() {
    return (
        <div className='welcomeScreenBody'>
            <div className='container'>
                <div className='headliner'>
                </div>
                <ContinueConversation />
                <ContinueConversation />
                <ContinueConversation />
                <ContinueConversation />
            </div>
        </div>
    )
}

