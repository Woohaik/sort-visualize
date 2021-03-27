import React from "react";

interface Props {
    left: number | string;
    size: {
        height: number;
        width: number;
    }
    color: string;
    class: string;
    interval: number;
}

const Bar = (props: Props) =>
(
    <div className={`bar ${props.class} `} style={{ background: props.color, left: props.left, width: props.size.width, height: props.size.height, transition: `all 0.5s, left 0.${props.interval}s , background 0.${props.interval}s` }}>
    </div>
);


export default Bar;
