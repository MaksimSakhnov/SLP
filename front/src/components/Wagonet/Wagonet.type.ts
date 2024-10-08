import {MutableRefObject} from "react";

export type WagonetType = {
    x: number;
    y: number;
    width: number;
    height: number;
    customRef?: MutableRefObject<any>,
}