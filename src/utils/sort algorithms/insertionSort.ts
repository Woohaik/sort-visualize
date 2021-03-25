import { IBarMeta, IStepPart, Steps } from "../../types";

export const insertionSort = (toShort: IBarMeta[]): Steps => {
    let stepArray: Steps = [];
    const newArray = [...toShort];
    //Start from the second element.
    for (let index = 1; index < newArray.length; index++) {
        // Ir al elemento detras del index
        for (let j = index - 1; j > -1; j--) {
            const firstStep: IStepPart = { id1: newArray[j + 1].id, id2: newArray[j].id };
            let secondStep: IStepPart | null = { id1: newArray[j + 1].id, id2: newArray[j].id };
            if (newArray[j + 1].height < newArray[j].height) { // Comparacion
                //swap
                let tem = newArray[j];
                newArray[j] = newArray[j + 1]
                newArray[j + 1] = tem;
            } else {
                secondStep = null;
            }
            stepArray.push({ first: firstStep, second: secondStep });
        }
    };
    return stepArray;
}
