import { IBarMeta, IStep } from '../types';

export const bubbleSort = (toSortArr: IBarMeta[]) => {
    let newArray = [...toSortArr];
    let wasSomethingSwapped = false;
    let stepArray = [];
    do {
        wasSomethingSwapped = false;
        for (let index = 0; index < newArray.length; index++) {
            let firstStep: IStep = { id1: newArray[index].id, id2: newArray[index + 1]?.id };
            let secondStep: IStep | null = { id1: newArray[index].id, id2: newArray[index + 1]?.id };
            if (newArray[index].height > newArray[index + 1]?.height) { // Comparacion
                // Swapp
                let tmp = newArray[index];
                newArray[index] = newArray[index + 1];
                newArray[index + 1] = tmp;
                wasSomethingSwapped = true;
            } else {
                secondStep = null;
            }
            stepArray.push({ first: firstStep, second: secondStep });
        }
    } while (wasSomethingSwapped);
    return stepArray;
};