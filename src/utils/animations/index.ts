import { BLUE_COLOR, GREEN_COLOR } from "../../constants";
import { Bars } from "../../types";

export const changePost = (id1: number, id2: number, theBars: Bars, updateBars: (value: React.SetStateAction<Bars>) => void, interval: number): Promise<void> => {
    console.log(interval);
    return new Promise((resolve) => {
        setTimeout(() => {
            const newArray = [...theBars];
            const firstLeft = newArray.find(bar => bar.id === id1)?.left;
            const lastLeft = newArray.find(bar => bar.id === id2)?.left;
            const l1 = newArray.find(bar => bar.id === id1);
            const l2 = newArray.find(bar => bar.id === id2);
            if (l1 !== undefined) l1.left = lastLeft || -1;
            if (l2 !== undefined) l2.left = firstLeft || -1;
            updateBars(newArray);
            resolve();
        }, interval);
    });
};

export const setGreen = async (id: number, id2: number, theBars: Bars, updateBars: (value: React.SetStateAction<Bars>) => void, interval: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newBars = theBars.map((barObject) => {
                barObject.color = BLUE_COLOR;
                return barObject;
            });
            const BarToGreen = newBars.find(bar => bar.id === id);
            const BarToGreen2 = newBars.find(bar => bar.id === id2);
            if (BarToGreen !== undefined) BarToGreen.color = GREEN_COLOR;
            if (BarToGreen2 !== undefined) BarToGreen2.color = GREEN_COLOR;
            updateBars(newBars);
            resolve();
        }, interval);
    });
};
