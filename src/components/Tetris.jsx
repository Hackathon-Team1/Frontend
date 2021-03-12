import React, { useState } from 'react';
import Stage from './Stage'
import Display from './Display'
import StartBtn from './StartBtn'

function Tetris() {
	//TO-DO LIST:
	//rotate - using up and down
	//move - using left and right
	//space - drop instantly
	//constantly check if a row is cleared, after a piece has settled
	//
    const initialBoard = [
		[0,0,0,0,'Z','Z',0,0,0,0],
		[0,0,0,0,0,'Z','Z',0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,'J',0,0,0,0,0,0,0],
		['O','O','J',0,0,0,0,0,0,0],
		['O','O','J','J','I','I','I','I',0,0]
	];
	const [board, setBoard] = useState(initialBoard);
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Stage board={board}/>
            <div style={{flexDirection: 'column'}}>
                <Display text='Score'/>
				<StartBtn/>
            </div>
        </div>
    )
}

export default Tetris;