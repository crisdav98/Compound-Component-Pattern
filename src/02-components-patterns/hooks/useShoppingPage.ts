import { useState } from "react";
import { IOnChangeArgs, Product } from "../interfaces/interfaces"

interface IProductInCart extends Product {
    count: number;
}
export const useShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: IProductInCart;
    }>({});

    const onProductCountChange = ({ counter, product }: IOnChangeArgs) => {
        // ? LOGIC CRISTIAN
        setShoppingCart((prev) => {
            if (counter === 0) {
                const { [product.id]: toDelete, ...rest } = prev;
                return rest;
            }
            return {
                ...prev,
                [product.id]: { ...product, count: counter }
            }
        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }

}