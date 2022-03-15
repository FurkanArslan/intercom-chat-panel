import React from 'react'
import './style.css'
export default function ChattbotButton({ isChatShowing, showChat }) {
    console.log(isChatShowing)
    return (
        <div className='chatbotButton' onClick={() => { showChat(!isChatShowing) }}>
            <img src={isChatShowing ? "./arrow.png" : "./chatbot.png"} width="30px" height="30px" style={{ marginTop: "15px" }} ></img>
        </div>
    )
}
