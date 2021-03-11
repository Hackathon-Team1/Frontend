import React from 'react';

function Cell(props) {
    return (
        <div style={{color: props.color, width: '1%', height: '1%'}}></div>
    )
}

export default Cell;