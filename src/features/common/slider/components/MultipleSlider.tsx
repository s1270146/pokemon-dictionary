"use client"

import { Box, Slider } from "@mui/material";
import { useMultipleSliderState } from "../hooks";

export default function MultipleSlider({
    min,
    max,
    onChange
}:{
    min: number,
    max: number,
    onChange?: (value: number[])=>void,
}) {
    const {value, handleChange} = useMultipleSliderState(min, max);

    return (
        <>
            <div className="flex justify-center">
                <div>{value[0]}</div>
                <p>&#12316;</p>
                <div>{value[1]}</div>
            </div>
            <Box>
                <Slider
                    sx={{
                        color: "orange"
                    }}
                    min={min}
                    max={max}
                    value={value}
                    onChange={(event: Event, value: number | number[])=>{
                        handleChange(value);
                        if (onChange) {
                            onChange(value as number[]);
                        }
                    }}
                    color="secondary"
                    disableSwap
                />
            </Box>
        </>
    );
}