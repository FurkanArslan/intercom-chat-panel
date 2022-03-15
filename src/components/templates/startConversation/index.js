import React, { useState } from 'react'
import './style.css'

export default function StartConversationPage({ goBack }) {
    const defaultOperatorMessage = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    const [userMessage, setUserMessage] = useState();
    const [messageList, setMessageList] = useState([]);


    const sendNewMessage = () => {
        const tempList = Object.assign([], messageList);
        const newMessage = {
            type: 1,
            message: userMessage
        };
        tempList.push(newMessage);
        tempList.push({ type: 0, message: defaultOperatorMessage });
        setMessageList(tempList);
        setUserMessage("")
    }

    return (
        <div className='scScreenBody'>
            <div className='scHeader'>
                <div className='scGoBackButton' onClick={() => { goBack() }}>
                    <img className='scBackImage' src="./arrow.png" width="20px" height="20px" />
                </div>
                <div className='scHeaderText'>
                    <div className='scIntercom'>
                        Intercom
                    </div>
                    <div className='scDescription'>
                        We help your business grow by connecting you to your customers.
                    </div>
                    <div className='replyTimeContainer'>
                        <div class="intercom-6lpybd e1v1uqwk0">
                            <div class="intercom-h9ic2e e1v1uqwk1">
                                <div class="intercom-79elbk eftbqer0">
                                    <div size="56" class="intercom-1kzqrg5 evxuo3e0">
                                        <img src="https://static.intercomassets.com/avatars/4448521/square_128/IMG_5248-1604679761.jpg?1604679761" alt="Eden profile" />
                                    </div>
                                </div>
                            </div>
                            <div className='scInnerHeaderText'>
                                <div className='scDescription'>
                                    <div style={{ width: 150 }}>Our usual reply time</div>
                                    <div>A few minutes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='scContainer'>
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

