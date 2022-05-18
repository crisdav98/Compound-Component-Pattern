import { useEffect, useRef, useState } from "react";
import { Product, IOnChangeArgs, InitialValues } from "../interfaces/interfaces";

interface IUseProduct {
    product: Product;
    onChange?: (args: IOnChangeArgs) => void;
    count?: number;
    initialValues?: InitialValues;
}


export const useProduct = ({ onChange, product, count = 0, initialValues }: IUseProduct) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || count);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        // TODO: Esto impide que el número sea menor a 0
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount) newValue = Math.min(newValue, initialValues.maxCount);
        setCounter(newValue);
        // Si es que onChange existe se va a ejecutar onChange
        onChange && onChange({ counter: newValue, product });
    };


    const reset = () => {
        setCounter(initialValues?.count || count);
    }

    // ! CADA USE EFFECT DEBE DE TENER UNA SOLA FUNCIÓN

    // ? ESTE USE EFFECT PERMITE QUE AL NO TENER EL COMPONENTE AÚN RENDERIZADO NO ACTUALICE EL COUNT
    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(count);
    }, [count]);

    //? Este Use effect cambia el valor a TRUE cuando ya se renderizó el componente
    useEffect(() => {
        isMounted.current = true;
    }, [])


    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReach: !!initialValues?.maxCount && initialValues.maxCount === counter,
        reset,
    }

}