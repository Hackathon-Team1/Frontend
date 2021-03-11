import React from 'react';

function Cell(props) {
    return (
        <td style={{width: 20, height: 20, backgroundColor: props.color}}></td>
    );
}

export default Cell;