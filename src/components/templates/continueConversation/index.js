import React from 'react'
import './style.css'
export default function ContinueConversationPage({ goBack }) {
    return (
        <div className='ccScreenBody'>
            <div className='ccHeader'>
                <div className='goBackButton' onClick={() => { goBack() }}>
                    <img className='ccBackImage' src="./arrow.png" width="30px" height="30px" />
                </div>
                <div className='headerText'>
                    <img src="./operator.png" width="50px" height="50px" />
                    <div className='ccTextContainer'>
                        <div className='ccOperator'>
                            Operator
                        </div>
                        <div className='ccBot'>
                            Bot
                        </div>
                    </div>
                </div>
            </div>
            <div className='ccContainer'>

            </div>
        </div>
    )
}

