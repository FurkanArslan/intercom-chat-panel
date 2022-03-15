import React from 'react'
import './style.css'
export default function NewsBox({ newsTitle, newsHeadLine, newsContent, imageUrl, redirect }) {

    return (
        <div className='newsBox'>
            <div className='newsHead'>

                <h4 className='newsHeadline'>
                    {
                        newsTitle
                    }

                </h4>
                <div className='newsImageContainer'>
                    <img src={imageUrl} alt="" role="presentation" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>

            <div className='newsDetail' onClick={() => {
                window.location.href = redirect
            }}>
                <div className='newsTextHolder'>
                    <div className='newsDetailHeadLine'>

                        {newsHeadLine}
                    </div>
                    <div className='newsDetailContent'>

                        {
                            newsContent
                        }
                    </div>
                </div>
            </div>



        </div>
    );
}
