import React from 'react'

interface Props {
    height: number;
    width: number;
    color: string;
    left: number;
}

const Bar = (props: Props) => {
    return (
        <div className="bar">
        </div>
    )
}

export default Bar
