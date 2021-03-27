import { IBarMeta, IStepPart, Steps } from "../../types";

export const bubbleSort = (toSortArr: IBarMeta[]): Steps => {
    const newArray = [...toSortArr];
    let wasSomethingSwapped = false;
    const stepArray: Steps = [];
    do {
        wasSomethingSwapped = false;
        for (let index = 0; index < newArray.length; index++) {
            const firstStep: IStepPart = { id1: newArray[index].id, id2: newArray[index + 1]?.id };
            let secondStep: IStepPart | null = { id1: newArray[index].id, id2: newArray[index + 1]?.id };
            if (newArray[index].height > newArray[index + 1]?.height) { // Comparacion
                // Swapp
                const tmp = newArray[index];
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