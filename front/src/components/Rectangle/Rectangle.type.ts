import {MutableRefObject, RefObject} from "react";

export type RectangleType = {
    x: number;
    y: number;
    width: number;
    height: number;
    customRef?:  MutableRefObject<any>
}