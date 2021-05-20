import { Bars } from "../types";
import { getRandomInt } from "../utils/getRandomInt";


const barWidth = 35;
const MAX_BAR_QUANTITY = 20;
const MIN_BAR_QUANTITY = 4;
export const BLUE_COLOR = "#0056ad";
export const GREEN_COLOR = "#86BE34";
const INITIAL_BAR_ARR: Bars = [
    {
        id: 0,
        color: BLUE_COLOR,
        height: getRandomInt(20, 300),
        left: 100,
    },
    {
        id: 1,
        color: BLUE_COLOR,
        height: getRandomInt(20, 300),
        left: 100,
    },
    {
        id: 2,
        color: BLUE_COLOR,
        height: getRandomInt(20, 300),
        left: 100,
    },
    {
        id: 3,
        color: BLUE_COLOR,
        height: getRandomInt(20, 300),
        left: 100,
    },
];



export { barWidth, MAX_BAR_QUANTITY, MIN_BAR_QUANTITY, INITIAL_BAR_ARR };