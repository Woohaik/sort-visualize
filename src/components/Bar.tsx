import React from "react";

interface Props {
    left: number | string;
    size: {
        height: number;
        width: number;
    }
    color: string;
    class: string;
}

const Bar = (props: Props) =>
(
    <div className={`bar ${props.class} `} style={{ background: props.color, left: props.left, width: props.size.width, height: props.size.height }}>
    </div>
);


export default Bar;
