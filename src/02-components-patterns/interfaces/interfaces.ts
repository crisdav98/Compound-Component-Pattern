import { CSSProperties, ReactElement } from "react";
import { IProductImage } from "../components/ProductImage";
import { IProductButtons } from "../components/ProductButtons";
import { IProductTitle } from "../components/ProductTitle";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
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
}
export interface ProductCardHOCProps {
    ({ children, product, className }: ProductCardProps): JSX.Element;
    Title: (Props: IProductTitle) => JSX.Element;
    Image: (Props: IProductImage) => JSX.Element;
    Buttons: (Props: IProductButtons) => JSX.Element
}