import { barWidth } from "../constants";
import { Bars } from "../types";
import Bar from "./Bar";

interface Props {
    bars: Bars;
    interval: number;
}

const OrderCanvas = (props: Props): JSX.Element => {

    const widthOfContent = () => (props.bars.length * barWidth) + (props.bars.length - 1) * 10;

    return (<div className="wrapper ">
        <div className="order-content" style={{ left: `calc(50% - ${widthOfContent() / 2}px)`, width: widthOfContent() }}>
            {
                props.bars.map((barObject, index) => {
                    const size = {
                        height: barObject.height,
                        width: barWidth
                    };
                    return (<Bar interval={props.interval} class={index > 3 ? "ease-in" : ""} key={index} left={barObject.left} size={size} color={barObject.color} />);
                })
            }
        </div>
    </div>);
};


export default OrderCanvas;