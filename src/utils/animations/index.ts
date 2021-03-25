import { Bars } from "../../types";

export const changePost = (id1: number, id2: number, theBars: Bars, updateBars: (value: React.SetStateAction<Bars>) => void): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let newArray = [...theBars];
            const firstLeft = newArray.find(bar => bar.id === id1)?.left;
            const lastLeft = newArray.find(bar => bar.id === id2)?.left;
            const l1 = newArray.find(bar => bar.id === id1);
            const l2 = newArray.find(bar => bar.id === id2);
            if (l1 !== undefined) l1.left = lastLeft || -1;
            if (l2 !== undefined) l2.left = firstLeft || -1;
            updateBars(newArray);
            resolve();
        }, 500)
    })
}

export const setGreen = async (id: number, id2: number, theBars: Bars, updateBars: (value: React.SetStateAction<Bars>) => void): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let newBars = theBars.map((barObject) => {
                barObject.color = "#0056ad";
                return barObject;
            })
            let BarToGreen = newBars.find(bar => bar.id === id);
            let BarToGreen2 = newBars.find(bar => bar.id === id2);
            if (BarToGreen !== undefined) BarToGreen.color = "#7da542";
            if (BarToGreen2 !== undefined) BarToGreen2.color = "#7da542";
            updateBars(newBars);
            resolve();
        }, 500)
    });
}
