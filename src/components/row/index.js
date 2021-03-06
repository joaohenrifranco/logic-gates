import React from 'react';
import Block from '../block';
import './row.css';


const Row = (props) => {
    const { blocks } = props;
    return (
        <div className="row">
            { blocks.map((e, i) => <Block key={i} type={e} />) }
        </div>
    )
}

export default Row;