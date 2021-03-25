import { Bars } from "../types";
import { getRandomInt } from "../utils/getRandomInt";

const CANVAS_SIZE = 800;
const barWidth = 35;
const MAX_BAR_QUANTITY = 20;
const MIN_BAR_QUANTITY = 4;

const INITIAL_BAR_ARR: Bars = [
    {
        id: 0,
        color: "#0056ad",
        height: getRandomInt(20, 300),
        left: 100,
    },
    {
        id: 1,
        color: "#0056ad",
        height: getRandomInt(20, 300),
        left: 100,
    },
    {
        id: 2,
        color: "#0056ad",
        height: getRandomInt(20, 300),
        left: 100,
    },
    {
        id: 3,
        color: "#0056ad",
        height: getRandomInt(20, 300),
        left: 100,
    },
];

export { CANVAS_SIZE, barWidth, MAX_BAR_QUANTITY, MIN_BAR_QUANTITY, INITIAL_BAR_ARR }