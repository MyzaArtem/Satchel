import { Clothes } from "../../../types/types";

export interface AsideItemProps {
    id: number;
    text: string;
    link: Clothes;
}

export const AsideItem:React.FC<AsideItemProps> = ({text}) => {
    return (
        <li>{text}</li>
    )
}