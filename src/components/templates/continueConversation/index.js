import React, { useState } from 'react'
import './style.css'

const defaultMessages = [
    {
        id: 0,
        type: 0,
        message: "Hi there 👋\
        What brings you to Intercom today?"
    },
    {
        id: 1,
        type: 1,
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
    },
    {
        id: 2,
        type: 0,
        message: "an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
    },
    {
        id: 3,
        type: 1,
        message: "the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets "
    },
    {
        id: 4,
        type: 0,
        message: "Hcontaining Lorem Ipsum passages, and more recently with desktop"
    },
    {
        id: 5,
        type: 1,
        message: "publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
]


export default function ContinueConversationPage({ goBack }) {
    const [userMessage, setUserMessage] = useState();
    const [messageList, setMessageList] = useState(defaultMessages);


    const sendNewMessage = () => {
        const tempList = Object.assign([], messageList);
        const newMessage = {
            type: 1,
            message: userMessage
        };
        tempList.push(newMessage);
        setMessageList(tempList);
        setUserMessage("")
    }

    return (
        <div className='ccScreenBody'>
            <div className='ccHeader'>
                <div className='goBackButton' onClick={() => { goBack() }}>
                    <img className='ccBackImage' src="./arrow.png" width="20px" height="20px" />
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
                {
                    messageList && (<div>
                        {
                            messageList.map((item) => {
                                return (
                                    <div>
                                        {
                                            item.type === 0 ?
                                                <div className="botMessageRow">
                                                    <img style={{ marginRight: "10px" }} src="./operator.png" width="50px" height="50px" />
                                                    <div key={item.id} className="botMessage">
                                                        {item.message}</div>
                                                </div> :
                                                <div className="userMessageRow">
                                                    <div key={item.id} className="userMessage">
                                                        {item.message}</div>
                                                </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>)
                }
            </div>
            <div className='ccWriteField'>
                <textarea
                    className='ccWriteInput' placeholder='Write a reply..' value={userMessage} onChange={(e) => { setUserMessage(e.target.value) }

                    }></textarea>
                <div className='ccSendButton' onClick={() => {
                    sendNewMessage();
                }}><img src="./send.png" width="30px" height="30px" /></div>
            </div>
        </div>
    )
}

