import { Bars } from "./../src/types";
import { bubbleSort, insertionSort, selectionSort } from "./../src/utils";
import { BLUE_COLOR } from "./../src/constants";

describe("Sorting algorithm", () => {
    const toSortBars: Bars = [
        {
            id: 0,
            color: BLUE_COLOR,
            height: 50,
            left: 100,
        },
        {
            id: 1,
            color: BLUE_COLOR,
            height: 75,
            left: 100,
        },
        {
            id: 2,
            color: BLUE_COLOR,
            height: 15,
            left: 100,
        },
        {
            id: 3,
            color: BLUE_COLOR,
            height: 100,
            left: 100,
        },
        {
            id: 4,
            color: BLUE_COLOR,
            height: 20,
            left: 100,
        },
    ];



    it("Bubble", () => {
        const steps = bubbleSort(toSortBars);
        expect(steps).not.toBeNull;
        expect(steps.length).toBe(20);
        expect(steps[0].second).toBeNull();
        expect(steps[2].second).toBeNull();
        expect(steps[8].second).toBeNull();
        expect(steps[1].second?.id1).toEqual(1);
        expect(steps[5].second?.id1).toEqual(0);
    })
    it("insertion", () => {
        const steps = insertionSort(toSortBars);
        expect(steps).not.toBeNull;
        expect(steps.length).toBe(10);

    })
    it("selection", () => {
        const steps = selectionSort(toSortBars);
        expect(steps).not.toBeNull;
        expect(steps.length).toBe(15);
    })
})