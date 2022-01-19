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
            const productInCart: IProductInCart = prev[product.id] || {
                ...product,
                count: 0,
            };
            if (Math.max(productInCart.count + counter, 0) > 0) {
                productInCart.count += counter;
                return {
                    ...prev,
                    [product.id]: productInCart,
                };
            }
            const { [product.id]: toDelete, ...rest } = prev;
            return rest;
        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }

}