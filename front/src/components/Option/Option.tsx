import React from "react";
import {Image} from "react-konva";
import {OptionType} from "./Option.type";
import useImage from 'use-image';


export const Option = ({x, y, width, height, customRef, url}: OptionType) => {
    const [image] = useImage(url)



    return (

        <Image
            image={image}
            ref={(node) => {
                if(customRef){
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