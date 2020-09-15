import React from 'react';

import './circle-word.scss';

 const CircleWord = ({ height = 72, start = 0, space = 18, text = '' }) => {

    const arrLetter = text.split('');
    
    return (
        <div className='wrapper-circle-word' style={{
            height: `${height * 2}px`,
            width: `${height * 2}px`,
        }}>
            <div className='circle-word' style={{
                height: `${height * 2}px`,
                width: `${height * 2}px`,
            }}>
                {
                    arrLetter.map( (letter, idx) => {
                        start += 360 / arrLetter.length;
                    return (
                        <span className='circle-word__letter'
                            style={ { 
                                transform: `rotate(${start}deg)`,
                                width: `${space}px`,
                                height : `${height}px`
                            } } 
                            key={idx}>{ letter }</span>
                    )
                    })
                }
            </div>
        </div>

    )
}

export default CircleWord;