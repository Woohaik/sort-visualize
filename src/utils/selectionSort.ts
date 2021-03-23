import { IBarMeta, IStepPart, Steps } from "../types";

export const selectionSort = (toShort: IBarMeta[]): Steps => {
    let stepArray: Steps = [];
    const newArray = [...toShort];
    let arrLength = newArray.length;
    for (let index = 0; index < arrLength; index++) {
        let smallItemIndex = index;
        for (let j = index + 1; j < arrLength; j++) {
            let firstStep: IStepPart = { id1: newArray[j].id, id2: newArray[smallItemIndex].id };
            if (newArray[j].height < newArray[smallItemIndex].height) {
                smallItemIndex = j;
            }
            stepArray.push({ first: firstStep, second: null });
        }

        let firstStep: IStepPart = { id1: newArray[index].id, id2: newArray[smallItemIndex].id };

        let secondStep: IStepPart | null = { id1: newArray[index].id, id2: newArray[smallItemIndex].id };


        if (smallItemIndex !== index) { // Comparacion
            // Swapp
            let tmp = newArray[index];
            newArray[index] = newArray[smallItemIndex];
            newArray[smallItemIndex] = tmp;
        } else {
            secondStep = null;
        }
        stepArray.push({ first: firstStep, second: secondStep });

    }
    return stepArray;
}