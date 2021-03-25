export interface IStepPart {
    id1: number;
    id2: number;
}

export interface IStep {
    first: IStepPart;
    second: IStepPart | null;
}

export type Steps = IStep[];

export interface IBarMeta {
    id: number;
    color: string;
    height: number;
    left: number;
}

export type Bars = IBarMeta[];
