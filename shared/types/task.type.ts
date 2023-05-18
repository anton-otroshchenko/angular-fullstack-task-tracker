import {ILabel} from "./labels.type";

type Itask = {
    id: string;
    title: string;
    details: string;
    columnId:string;
    labels: ILabel[];
};
export { type Itask }
