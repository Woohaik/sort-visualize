
import { barWidth, CANVAS_SIZE } from "../constants";
import { Bars } from "../types";

import Bar from './Bar';

interface Props {
    bars: Bars;
}

const OrderCanvas = (props: Props) => {
    const widthOfContent = () => (props.bars.length * barWidth) + (props.bars.length - 1) * 10;
    return (<div className="wrapper ">
        <div className="order-content" style={{ left: (CANVAS_SIZE - widthOfContent()) / 2, width: widthOfContent() }}>
            {
                props.bars.map((barObject, index) => {
                    const size = {
                        height: barObject.height,
                        width: barWidth
                    }
                    return <Bar class={index > 3 ? "ease-in" : ""} key={index} left={barObject.left} size={size} color={barObject.color} />
                })
            }
        </div>
    </div>)

}


export default OrderCanvas;