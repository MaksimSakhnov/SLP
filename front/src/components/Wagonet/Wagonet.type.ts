import {MutableRefObject, RefObject} from "react";

export type WagonetType = {
    x: number;
    y: number;
    width: number;
    height: number;
    url: string
    customRef?:  MutableRefObject<any>,
}