import { SizesListItemProps } from "../components/ui/SizesListItem/SizesListItem";

export enum Clothes {
    'New' = 1,
    'Shoes' = 2,
    'Accessories' = 3,
    'Watch' = 4,
    'Brands' = 5,
    'Sport' = 6,
    'Clothing' = 7,
    'Shirt' = 8,
    'Sweatshirt' = 9,
    'T-Shirt' = 10,
    'Jacket' = 11,
    'Coat' = 12,
    'Pants' = 13,
    'Shorts' = 14,
    'Jumpsuit' = 15,
    'Loungewear' = 16,
    'Sportswear' = 17,
    'Underwear' = 18,
    'Swimwear' = 19,
    'Cape' = 20,
    'Dress' = 21
}

export enum Gender {
    'Male',
    'Female'
}

export type FooterListItem = {
    id: number;
    headText: string;
    text: string;
    link: string;
};

export type NavBarItem = {
    text: string;
    link: Clothes;
}

export type AsideItem = {
    id: number;
    text: string;
    link: Clothes;
}

export type Card = {
    id: number;
    image: string;
    brand: string;
    price: number;
    type: Clothes | Clothes[];
    gender: Gender
}

export type DetailCard = {
    description: string
    sizes: SizesListItemProps[]
} & Card

