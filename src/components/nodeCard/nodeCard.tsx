import React from 'react';

const NodeCard: React.FC = () => {
    const height = window.innerHeight * 1 / 3;
    const width = window.innerWidth;

    return (
        <svg width={width} height={height}>
            <rect
                width={width}
                height={height}
                style={{ fill: '#f0f0f0' }} // change to the desired color
            />
            {/* Additional content can be added here */}
        </svg>
    );
}

export default NodeCard;