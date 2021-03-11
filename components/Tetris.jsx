import React from 'react';
import Stage from './Stage'
import Display from './Display'
import StartBtn from './StartBtn'

function Tetris(stage) {
    return (
        <div>
            <Stage/>
            <div>
                <Display text='Score'/>
            </div>
            <StartBtn/>
        </div>
    )
}

export default Tetris;