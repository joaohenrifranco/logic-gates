import React from 'react';
import Row from '../row';
import './board.css';


const Board = (props) => {
    const { matrix } = props

    return (
        <div className="board">
            { matrix.map((e, i) => <Row key={i} blocks={e} />) }
        </div>
    )
}

export default Board;