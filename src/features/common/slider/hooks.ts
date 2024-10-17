import { useState } from "react";

export const useMultipleSliderState = (start: number, end: number) => {
    const [value, setValue] = useState<number[]>([start, end]);
    const handleChange = (newValue: number | number[]) => {
        setValue(newValue as number[]);
    }

    return {value, handleChange};
}