import React, { Component } from 'react'
import './style.css'
import ContinueConversation from '../../molecules/boxes/continueBox'
import StartConversationBox from '../../molecules/boxes/satartConvBox'
export default function Welcome() {
    return (
        <div className='welcomeScreenBody'>
            <div className='container'>
                <div className='headliner'>
                    <div className='imageRow'>
                        <img src="./logo.png" width="40px" height="40px"></img>
                    </div>
                    <div className='hiRow'>
                        <h1>Hi  👋</h1>
                    </div>
                    <div className='descRow'>
                        <h3>
                            <span>We help your business grow by connecting you to your customers.</span>
                        </h3>
                    </div>
                </div>
                <ContinueConversation />
                <StartConversationBox />
                <ContinueConversation />
                <ContinueConversation />
            </div>
        </div>
    )
}

