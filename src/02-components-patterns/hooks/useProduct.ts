import { useState } from "react";

export const useProduct = () => {
    const [counter, setCounter] = useState(0);
    const increaseBy = (value: number) => {
        // TODO: Esto impide que el número sea menor a 0
        setCounter((prev) => Math.max(prev + value, 0));
    };

    return {
        counter,
        increaseBy
    }

}