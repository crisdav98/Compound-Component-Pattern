import { useEffect, useRef, useState } from "react";
import { Product, IOnChangeArgs } from "../interfaces/interfaces";

interface IUseProduct {
    product: Product;
    onChange?: (args: IOnChangeArgs) => void;
    count?: number
}


export const useProduct = ({ onChange, product, count = 0 }: IUseProduct) => {
    const [counter, setCounter] = useState(count);
    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        console.log(isControlled.current);

        if (isControlled.current) {
            return onChange!({ counter: value, product });
        }

        // TODO: Esto impide que el número sea menor a 0
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);
        // Si es que onChange existe se va a ejecutar onChange
        onChange && onChange({ counter: newValue, product });
    };
    useEffect(() => {
        setCounter(count);
    }, [count]);

    return {
        counter,
        increaseBy,
    }

}