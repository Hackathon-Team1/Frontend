import React from 'react';
import Cell from './Cell'
import { tetrominos } from './getTetromino'

function Stage(props) {
    return (
        <table style={{borderSpacing: 1, borderColor: '#595959'}}>
				{props.board.map(row=>{
					return <tr>{row.map(item=>{
						if(item){
							let cell = tetrominos[item];
							return <Cell color={cell.color} />					
						}else{
							return <Cell color={'#000000'} />
						}
					})}</tr>
				})}	
		</table>	
    )
}

export default Stage;