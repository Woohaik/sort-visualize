import React from 'react'

interface Props {
    left: number;
    size: {
        height: number;
        width: number;
    }
    color: string;
}

const Bar = (props: Props) => {
    return (
        <div className="bar" style={{ background: props.color, left: props.left, width: props.size.width, height: props.size.height }}>
        </div>
    )
}

export default Bar
