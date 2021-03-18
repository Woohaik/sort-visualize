import { IBarMeta, IStep } from '../types';

export const bubbleSort = (toSortArr: IBarMeta[]) => {
    let newArray = [...toSortArr];
    let swapped = false;
    let stepArray = []
    do {
        swapped = false;
        for (let i = 0; i < newArray.length; i++) {
            let firstStep: IStep = { id1: newArray[i].id, id2: newArray[i + 1]?.id };
            let secondStep: IStep | null = { id1: newArray[i].id, id2: newArray[i + 1]?.id };
            if (newArray[i].height > newArray[i + 1]?.height) {
                let tmp = newArray[i];
                newArray[i] = newArray[i + 1];
                newArray[i + 1] = tmp;
                swapped = true;
            } else {
                secondStep = null;
            }
            stepArray.push({ first: firstStep, second: secondStep });
        }
    } while (swapped);
    return stepArray;
};