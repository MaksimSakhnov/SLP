import {MutableRefObject} from "react";

export type OptionType = {
    x: number;
    y: number;
    width: number;
    height: number;
    url: string;
    customRef?: MutableRefObject<any>,
}