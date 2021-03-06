import React from 'react';
import './block.css';

const Block = (props) => {
    const { type } = props;
    return (
        <div className="block">
            {type}
        </div>
    )
}

export default Block;