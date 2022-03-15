import React, { Component } from 'react'
import './style.css'
import ContinueConversationBox from '../../molecules/boxes/continueBox'
import StartConversationBox from '../../molecules/boxes/startConvBox'
import NewsBox from '../../molecules/boxes/newsBox'
export default function WelcomePage({ goToPage }) {

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
                <ContinueConversationBox onClick={() => { goToPage("ContinueConversation") }} />
                <StartConversationBox onClick={() => { goToPage("StartConversation") }} />
                <NewsBox
                    imageUrl={"https://images.ctfassets.net/xny2w179f4ki/61KIC4DFnQ3G2aI26PCiNZ/ace5b456fff8f3bd471792d1ea88338d/NewAtIntercom-og.jpg"}
                    newsContent="Our leaders have some brand new Intercom products to share with you. You won’t want to miss it. New at Intercom: the virtual launch event on Wednesday, March 23rd. Register now."
                    newsTitle="New at Intercom: the virtual launch event"
                    newsHeadLine="New at Intercom: the virtual launch event"
                    redirect="https://www.intercom.com/new2022?utm_medium=internal&utm_source=ii-messenger&utm_campaign=20220323_ev_global_newatintercom&utm_content=messenger-home"
                />
                <NewsBox
                    imageUrl={"https://images.ctfassets.net/xny2w179f4ki/5B3IInw3GKAqJHfbmwhwi8/84fd740b61ee45efb3efaef3047f88a0/Share_image_2x.jpg"}
                    newsContent="See the 5 reasons it’s more important than ever to scale customer support teams, connect customer support software, and focus on empathy in customer service."
                    newsTitle="The Intercom Customer Support Trends Report 2022"
                    newsHeadLine="The Intercom Customer Support Trends Report 2022"
                    redirect="https://www.intercom.com/resources/guides/customer-support-trends-2022?utm_medium=internal&utm_source=ii-messenger&utm_campaign=01182022_support_trends_2022_campaign"
                />
            </div>
        </div>
    )
}

