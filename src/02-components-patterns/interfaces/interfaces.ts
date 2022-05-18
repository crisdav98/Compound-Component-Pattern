import { CSSProperties, ReactElement } from "react";
import { IProductImage } from "../components/ProductImage";
import { IProductButtons } from "../components/ProductButtons";
import { IProductTitle } from "../components/ProductTitle";

export interface IOnChangeArgs {
    product: Product;
    counter: number;
}
export interface InitialValues {
    count?: number;
    maxCount?: number;
}
export interface ProductCardProps {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    count?: number;
    onChange?: (args: IOnChangeArgs) => void;
    initialValues?: InitialValues;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    increaseBy: (value: number) => void;
    counter: number;
    product: Product;
    maxCount?: number;
}
export interface ProductCardHOCProps {
    ({ children, product, className }: ProductCardProps): JSX.Element;
    Title: (Props: IProductTitle) => JSX.Element;
    Image: (Props: IProductImage) => JSX.Element;
    Buttons: (Props: IProductButtons) => JSX.Element
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReach: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;

}