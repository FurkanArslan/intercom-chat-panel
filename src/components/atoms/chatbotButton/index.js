import React from 'react'
import './style.css'
export default function ChattbotButton({ isChatShowing, showChat }) {
    console.log(isChatShowing)
    return (
        <div className='chatbotButton' onClick={() => { showChat(!isChatShowing) }}>
            <img src={isChatShowing ? "./arrow.png" : "./chatbot.png"} width="40px" height="40px" style={{ marginTop: "10px" }} ></img>
        </div>
    )
}
