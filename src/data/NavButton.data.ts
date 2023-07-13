import { NavBarItem, Clothes } from "../types/types"

export const MainPageNavButtonData: NavBarItem[] = [
    {text: 'Мужчинам', link:'/man-blog'}, {text: 'Женщинам', link:'/woman-blog'}
]

export const CatalogNavButtonData: NavBarItem[] = [
    {text:'Новинки', link: Clothes.New},
    {text:'Одежда', link: Clothes.Clothing},
    {text:'Обувь', link: Clothes.Shoes},
    {text:'Аксессуары', link: Clothes.Accessories},
    {text:'Часы', link: Clothes.Watch},
    {text:'Бренды', link: Clothes.Brands},
] 