import React from 'react';
import Cell from './Cell'
import { tetrominos } from './getTetromino'

function Stage(props) {
    return (
        <div>{props.board.map(row=>{
            row.map(cell=>{
                if(cell){
                    const color = tetrominos[cell].color
                    return <Cell color={color} />
                }
            });
        })}</div>
    )
}

export default Stage;