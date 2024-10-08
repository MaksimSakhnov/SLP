import React from "react";
import {Image} from "react-konva";
import {WagonetType} from "./Wagonet.type";
import train from './../../assets/train.png'

const image = new window.Image();
image.src = train;


export const Wagonet = ({x, y, width, height, customRef}: WagonetType) => {


    return (
        <Image
            image={image}
            ref={(node) => {
                if (customRef) {
                    customRef.current = node;
                }
            }}
            x={x}
            y={y}
            width={width}
            height={height}
        />
    );
};