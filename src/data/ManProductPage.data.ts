import { Clothes, Gender, DetailCard } from "../types/types"
import { SizesListItemProps } from "../components/ui/SizesListItem/SizesListItem"

const clothesSizes: SizesListItemProps[] = [
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
    { size: "XXL" },
];

const shoesSizes: SizesListItemProps[] = [
    { size: "39" },
    { size: "40" },
    { size: "41" },
    { size: "42" },
    { size: "43" },
];

const accessoriesSizes: SizesListItemProps[] = [
    { size: "Не указан" },
]

export const ProductPageData: DetailCard[] = [
    {
        id: 1,
        image: 'shirtBorelli.jpg',
        brand: 'Borelli',
        price: 1000,
        type: [Clothes.Shirt, Clothes.New, Clothes.Clothing],
        gender: Gender.Male,
        description: 'Белая рубашка с отложным воротником органично впишется и в повседневный образ, и в комплект для офиса. Максимальной комфортной модель делает фактурное пике, которое хорошо пропускает воздух, мягко облегает фигуру и при этом не сковывает движения. Ультратонкие длинные волокна премиального хлопка придают материалу сходство с шелком.',
        sizes: clothesSizes
    },
    {
        id: 2,
        image: 'jilSadner-hoodie.jpg',
        brand: 'JIL SADNER',
        price: 600,
        type: [Clothes.Sweatshirt, Clothes.Clothing],
        gender: Gender.Male,
        description: 'Для пошива свитшота приглушенного светло-зеленого оттенка мастера марки использовали мягкий хлопковый футер с фактурной изнанкой и гладкой лицевой стороной. Плотный материал сохраняет тепло в прохладный день, при этом полотно слегка тянется',
        sizes: clothesSizes
    },
    {
        id: 3,
        image: 'granSassoPolo.jpg',
        brand: 'Gran Sasso',
        price: 2000,
        type: [Clothes.Shirt, Clothes.Clothing],
        gender: Gender.Male,
        description: 'итальянская марка трикотажных изделий, основанная в 1952 году. Бренд получил название в честь известного горного массива Гран-Сассо, самой высокой части Апеннин. История бренда началась в городке Сан-Эжидио алла Вибрата, где братья Ди Стефано основали компанию по производству трикотажа. Сегодня GRAN SASSO – по-прежнему семейный бизнес.',
        sizes: clothesSizes
    },
    {
        id: 4,
        image: 'stefanoRicciPolo.jpg',
        brand: 'Stefano Ricci',
        price: 3000,
        type: [Clothes.Shirt, Clothes.Clothing],
        gender: Gender.Male,
        description: 'В исполнении команды марки, основанной Стефано Риччи, поло с длинными рукавами получилось особенно комфортным. Модель кофейного оттенка выполнили из тонкого шелкового трикотажа, который исключительно приятно ощущается на теле и не перегревает. Привычную планку с пуговицами заменили короткой молнией с крупным пуллером.',
        sizes: clothesSizes
    },
    {
        id: 5,
        image: 'burbberyShirt.jpg',
        brand: 'Burberry',
        price: 1500,
        type: [Clothes["T-Shirt"],Clothes.New, Clothes.Clothing],
        gender: Gender.Male,
        description: 'Белую футболку мастера марки сшили из мягкого премиального хлопка с добавлением прочного эластана. Такой материал в тандеме с прямым кроем отвечает за комфортную посадку по фигуре и свободу движений.',
        sizes: clothesSizes
    },
    {
        id: 6,
        image: 'burrberyShirt2.jpg',
        brand: 'Burberry',
        price: 1200,
        type: [Clothes["T-Shirt"], Clothes.Clothing],
        gender: Gender.Male,
        description: 'Вдохновившись загадочным миром древних мифов и легенд, Рикардо Тиши создал несколько коллажей. Один из них, в виде маяка, русалок и акулы, появился на этой футболке из мягкого, но прочного хлопка джерси. Модель из весенне-летней коллекции может взять на себя всю смысловую нагрузку в образе.',
        sizes: clothesSizes
    },
    {
        id: 7,
        image: 'gucciJacket.jpg',
        brand: 'Gucci',
        price: 4500,
        type: [Clothes.Jacket,Clothes.New, Clothes.Clothing],
        gender: Gender.Male,
        description: 'Наши стилисты предлагают сделать однобортный пиджак главным акцентом в повседневном образе с футболкой и джинсами в базовой гамме. В фокусе внимания модель с широкими лацканами удерживает разноцветный жаккардовый паттерн, в котором зашифрованы инициалы Гуччио Гуччи.',
        sizes: clothesSizes
    },
    {
        id: 8,
        image: 'palmAngelsDenim.jpg',
        brand: 'Palm Angels',
        price: 1600,
        type: [Clothes.Jacket, Clothes.Clothing],
        gender: Gender.Male,
        description: 'Для пошива голубой джинсовой куртки со спущенной линией плеч мастера марки использовали прочный эластичный хлопок. Чтобы придать модели вид любимой вещи, которую носили много лет, на нее в готовом виде нанесли потертости. Сзади изделие декорировали белым крупным логотипом бренда и черным фирменным патчем.',
        sizes: clothesSizes
    },
    {
        id: 9,
        image: 'dcCape.jpg',
        brand: 'Dolce & Gabbana',
        price: 3700,
        type: [Clothes.Coat, Clothes.Clothing],
        gender: Gender.Male,
        description: 'Лаконичный вид двубортного бежевого тренча из коллекции сезона весна-лето не нарушают даже логотипы бренда, который Доменико Дольче и Стефано Габбана подчеркнули широкий пояс и один из лацканов. Мастера марки сшили модель из прочного хлопкового габардина.',
        sizes: clothesSizes
    },
    {
        id: 10,
        image: 'pumaShirt.jpg',
        brand: 'Puma',
        price: 500,
        type: [Clothes.Shirt, Clothes.Clothing],
        gender: Gender.Male,
        description: 'Черную футболку украсили разноцветным принтом, в котором читается сотрудничество марки с командой бренда Butter Goods. Для пошива модели использовали тонкое хлопковое джерси. Чтобы сэкономить ресурсы и уменьшить вред, который причиняет обычное производство природе, в состав материала добавили переработанные волокна.',
        sizes: clothesSizes
    },
    {
        id: 11,
        image: 'pradaJacket.jpg',
        brand: 'Prada',
        price: 3000,
        type: [Clothes.Jacket, Clothes.Clothing],
        gender: Gender.Male,
        description: 'Белоснежную куртку с эластичными манжетами-митенками сшили из ультрапрочного трехслойного полиэфира с мембраной, которая не промокает, не продувается ветром и при этом пропускает воздух. Тонкий слой графена не утяжеляет одежду, не мешает свободно двигаться и препятствует размножению бактерий, а главное – отлично сохраняет тепло, равномерно перераспределяя его на участки тела с более низкой температурой.',
        sizes: clothesSizes
    },
    {
        id: 12,
        image: 'rhudeShirt.jpg',
        brand: 'RHUDI',
        price: 7000,
        type: [Clothes.Shirt, Clothes.Clothing],
        gender: Gender.Male,
        description: 'Зеленую рубашку с короткими рукавами и отложным воротником делает по-летнему яркий сплошной принт в виде ромашек. За комфорт даже жарким днем отвечает тонкая хлопковая ткань, которая хорошо пропускает воздух. Ее предварительно выстирали, чтобы сделать еще мягче и придать слегка выбеленный эффект.',
        sizes: clothesSizes
    },
    {
        id: 13,
        image: 'cuhConcept.jpg',
        brand: 'ЦУМ',
        price: 700,
        type: [Clothes["T-Shirt"], Clothes.Clothing],
        gender: Gender.Male,
        description: 'Белую рубашку с короткими рукавами декорировали спереди крупными черными принтами в виде рычащих пантер, словно нарисованными от руки фломастером. Для пошива модели с отложным воротником использовали мягкую дышащую хлопковую ткань. Плотное переплетение тонких нитей сделало материал прочным и почти немнущимся.',
        sizes: clothesSizes
    },
    {
        id: 14,
        image: 'stoneislandJacket.jpg',
        brand: 'Stone Island',
        price: 1700,
        gender: Gender.Male,
        type: [Clothes.Jacket, Clothes.New, Clothes.Clothing],
        description: 'При создании куртки с высоким воротом, капюшоном и кулиской на талии дизайнеры марки ориентировались на практичность и удобство. Непромокаемую модель из прочного, непродуваемого ветром нейлона дополнили стеганым утепляющим слоем, который можно носить как самостоятельную верхнюю одежду. Вместе такие вещи подойдут для прохладной погоды, а по отдельности — для более теплых дней.',
        sizes: clothesSizes
    },
    {
        id: 15,
        image: 'palmAngelsJacket.jpg',
        brand: 'Palm Angels',
        price: 1000,
        gender: Gender.Male,
        type: [Clothes.Jacket, Clothes.Clothing],
        description: 'Для пошива черной джинсовой куртки со спущенной линией плеч мастера марки использовали мягкий плотный хлопок. На материал нанесли искусственные потертости, подчеркивающие детали кроя и создающие эффект вещи с историей. Принадлежность модели бренду обозначили крупным контрастным логотипом сзади, поддержав надпись кожаным патчем.',
        sizes: clothesSizes
    },
    {
        id: 16,
        image: 'paltoCape.jpg',
        brand: 'palto',
        price: 1700,
        gender: Gender.Male,
        type: [Clothes.Coat, Clothes.Clothing],
        description: 'Мастера марки сшили прямое однобортное пальто оттенка camel из мягкой шерсти и нежного кашемира, добавляющего материалу легкость. Чтобы он деформировался и не пилинговался, в состав включили прочный шелковистый нейлон. Модель из такой ткани комфортно садится по фигуре, высокая шлица не дает изделию сковывать шаг при ходьбе, а четкая линия плеч делает силуэт более статным.',
        sizes: clothesSizes
    },
    {
        id: 17,
        image: 'bossCape.jpg',
        brand: 'Boss',
        price: 3000,
        gender: Gender.Male,
        type: [Clothes.Coat, Clothes.Clothing],
        description: 'Бежевое двубортное пальто с широкими лацканами команда марки сделала легким и вместе с тем комфортным. Модель сшили из мягкой, хорошо сохраняющей тепло ткани, сотканной из невесомого кашемира и шелковистой шерсти. Не менее 60% ее волокон получили от производителей, которые выращивают овец в естественных природных условиях, а руно у животных состригают вручную.',
        sizes: clothesSizes
    },
    {
        id: 18,
        image: 'trussardiCape.jpg',
        brand: 'Trussardi',
        price: 2500,
        gender: Gender.Male,
        type: [Clothes.Shirt, Clothes.Clothing],
        description: 'Однобортное черное пальто длиной до колена мастера марки сшили из тонкой шерстяной ткани, хорошо удерживающей тепло. Чтобы материал не деформировался и не пилинговался, в состав добавили прочные нейлоновые волокна. Модель с широкими лацканами и акцентированной линией плеч делает фигуру более статной, а длинная шлица сзади не позволяет изделию сковывать шаг при ходьбе.',
        sizes: clothesSizes
    },
    {
        id: 19,
        image: 'stoneislandHoodie.jpg',
        brand: 'Stone Island',
        price: 1600,
        gender: Gender.Male,
        type: [Clothes.Sweatshirt, Clothes.Clothing],
        description: 'Мастера марки связали джемпер из мягкой меланжевой пряжи. Для ее создания использовали длинные волокна хлопка, которые хорошо пропускают воздух и не раздражают даже чувствительную кожу, а полиамид в составе не дает вещи пилинговаться. За счет конструкции плечевых швов изделие не сковывает движения. Модель украсили съемным фирменным патчем.',
        sizes: clothesSizes
    },
    {
        id: 20,
        image: 'slHoodie.jpg',
        brand: 'Saint Laurent',
        price: 1800,
        gender: Gender.Male,
        type: [Clothes.Sweatshirt, Clothes.Clothing],
        description: 'Формула комфорта бежевого худи включает два пункта: крой, не сковывающий движения, и мягкий дышащий материал. Для пошива модели из коллекции сезона весна-лето мастера бренда, основанного Ивом Сен-Лораном, использовали плотный хлопковый футер. Спереди изделие украсили небольшим принтом в виде логотипа марки.',
        sizes: clothesSizes
    },
    {
        id: 21,
        image: 'gaPants.jpg',
        brand: 'Giorgio Armani',
        price: 1600,
        type: [Clothes.Pants, Clothes.Clothing],
        gender: Gender.Male,
        description: 'Градус формальности темно-синих брюк с защипами, переходящими в отглаженные стрелки, Джорджо Армани снизил менее строгими кроем с заниженной линией шагового шва. Для пошива модели с высокой посадкой дизайнер выбрал гладкий хлопок.',
        sizes: clothesSizes
    },
    {
        id: 22,
        image: 'hugoPants.jpg',
        brand: 'Hugo',
        price: 2500,
        gender: Gender.Male,
        type: [Clothes.Pants, Clothes.Clothing],
        description: 'Дизайнеры марки, основанной Хуго Фердинандом Боссом, заменили плотный пояс этих чиносов резинкой с регулируемой кулиской, которая мягче облегает тело. Эластичным стал и хлопковый твил, поэтому зауженные брюки не сковывают шаг. С черной тканью контрастирует алый брендированный патч под левым боковым карманом.',
        sizes: clothesSizes
    },
    {
        id: 23,
        image: 'kitonPants.jpg',
        brand: 'kiton',
        price: 1600,
        gender: Gender.Male,
        type: [Clothes.Pants, Clothes.Clothing],
        description: 'Формула комфорта серых зауженных брюк с классической посадкой на талии включает два пункта: исключительное качество кроя и гладкую мягкую ткань стрейч на основе тонкой шерсти мериноса и премиального длинноволокнистого хлопка. Модель со стрелками и врезными карманами органично впишется в базовый гардероб.',
        sizes: clothesSizes
    },
    {
        id: 24,
        image: 'mankindShirt.jpg',
        brand: 'mankind',
        price: 1200,
        gender: Gender.Male,
        type: [Clothes.Swimwear, Clothes.Clothing],
        description: 'Голубую джинсовую рубашку с широкими короткими рукавами и отложным воротником мастера бренда изготовили из дышащего облегченного хлопка с гладкой поверхностью. Наши стилисты предлагают сочетать модель свободного кроя с темно-коричневыми брюками, серыми сабо и черной сумкой.',
        sizes: clothesSizes
    },
    {
        id: 25,
        image: 'pradaShirt.jpg',
        brand: 'Prada',
        price: 1500,
        gender: Gender.Male,
        type: [Clothes.Swimwear, Clothes.Clothing],
        description: 'Зеленую рубашку с короткими рукавами и отложным воротником делает по-летнему яркий сплошной принт в виде ромашек. За комфорт даже жарким днем отвечает тонкая хлопковая ткань, которая хорошо пропускает воздух. Ее предварительно выстирали, чтобы сделать еще мягче и придать слегка выбеленный эффект.',
        sizes: clothesSizes
    },
    {
        id: 26,
        image: 'ptShorts.jpg',
        brand: 'PT',
        price: 500,
        gender: Gender.Male,
        type: [Clothes.Shorts, Clothes.Clothing],
        description: 'Шорты светло-зеленого оттенка скроили зауженными, но они ничуть не сковывают шаг. Свободу движениям дает хлопковый твил со стрейчевыми нитями, который тянется, словно плотный трикотаж. Эластичная ткань получилась достаточно тонкой и дышащей, поэтому поддерживает комфортный микроклимат в жаркую погоду.',
        sizes: clothesSizes
    },
    {
        id: 27,
        image: 'zimerliHome.jpg',
        brand: 'zimerli',
        price: 2000,
        gender: Gender.Male,
        type: [Clothes.Loungewear, Clothes.Clothing],
        description: 'Сделать домашний отдых более комфортным поможет темно-серый халат с широким шалевым воротником. Модель с накладными карманами сшили из плотного шелкового атласа с благородным блеском. Из такого же белого материала выполнили узкий кант, подчеркивающий края деталей. В комплекте — пояс-лента, удерживающий запах.',
        sizes: clothesSizes
    },
    {
        id: 28,
        image: 'balenciagaSports.jpg',
        brand: 'balenciaga',
        price: 1700,
        gender: Gender.Male,
        type: [Clothes.Sportswear, Clothes.Clothing],
        description: '',
        sizes: clothesSizes
    },
    {
        id: 29,
        image: 'tmTrs.jpg',
        brand: 'TM',
        price: 700,
        gender: Gender.Male,
        type: [Clothes.Underwear, Clothes.Clothing],
        description: 'Мастера марки сшили темно-серые боксеры из плотного, но при этом легкого шелка. Он успокаивающе действует на кожу и надолго сохраняет свои форму и цвет. В чистом виде этот материал совсем не тянется, поэтому в состав добавили стрейчевые нити. На контрасте с тканью играет эластичный брендированный пояс из мягкого бархатистого текстиля.',
        sizes: clothesSizes
    },
    {
        id: 30,
        image: 'poloSport.jpg',
        brand: 'Polo',
        price: 1200,
        gender: Gender.Male,
        type: [Clothes.Sportswear, Clothes.Clothing],
        description: 'Антрацитово-серое поло с легким меланжевым эффектом вошло в осенне-зимнюю коллекцию. Для пошива модели мастера марки, основанной Ральфом Лореном, использовали тонкий и при этом очень прочный хлопок пике, который не растягивается и не боится частых стирок. Знаковую вышивку игрока в конное поло на этот раз выполнили серебристой нитью.',
        sizes: clothesSizes
    },
    {
        id: 31,
        image: 'premiataShoes1.jpg',
        brand: 'Premiata',
        price: 1700,
        gender: Gender.Male,
        type: Clothes.Shoes,
        description: 'В случае с кроссовками Mase из весенне-летней коллекции дизайнеры бренда сыграли на контрасте фактур. Для пошива пары использовали комбинацию двух материалов: прочного шелковистого текстиля и мягкой бархатистой замши. Задник повторяет форму стопы, поэтому в обуви будет особенно комфортно во время длительных прогулок.',
        sizes: shoesSizes
    },
    {
        id: 32,
        image: 'dcShoes.jpg',
        brand: 'Dolce & Gabbana',
        price: 2700,
        gender: Gender.Male,
        type: Clothes.Shoes,
        description: 'Для изготовления черных лоферов с миндалевидным мысом и тонкой гибкой подошвой мастера марки использовали мягкую гладкую кожу. Обувь из такого материала плотно облегает стопу, не сдавливая, поэтому в ней будет комфортно в течение всего дня. Перемычку модели Доменико Дольче и Стефано Габбана декорировали фирменной металлической пластиной с выгравированным логотипом.',
        sizes: shoesSizes
    },
    {
        id: 33,
        image: 'pradaShoes.jpg',
        brand: 'Prada',
        price: 1540,
        gender: Gender.Male,
        type: Clothes.Shoes,
        description: 'В сезоне осень-зима Миучча Прада и Раф Симонс голосуют за демократизацию черных дерби, их аргумент – широкая рифленая подошва, как у армейских сапог. Неформальный характер туфель подчеркивают и симметричные нейлоновые вставки сбоку, которым противопоставлена гладкая кожа, отполированная до блеска.',
        sizes: shoesSizes
    },
    {
        id: 34,
        image: 'santoniShoes.jpg',
        brand: 'Santoni',
        price: 1990,
        gender: Gender.Male,
        type: Clothes.Shoes,
        description: 'Светло-коричневые оксфорды с миндалевидным мысом, на квадратном наборном каблуке Джузеппе Сантони создал из мягкой гладкой кожи, устойчивой к царапинам. Мастера марки многократно окрашивали и полировали туфли вручную до появления благородной патины, которая со временем проявится еще ярче.',
        sizes: shoesSizes
    },
    {
        id: 35,
        image: 'henriSunGlasses.jpg',
        brand: 'Henri',
        price: 400,
        gender: Gender.Male,
        type: Clothes.Accessories,
        description: 'Визуально хрупкую и необычайно легкую оправу авиаторов собрали вручную из титановых особо прочных деталей. Серебристый не окисляющийся со временем металл дополнили золотистыми декоративными элементами на мосту и дужках модели. Градиентные линзы полностью отсекают ультрафиолетовое излучение.',
        sizes: accessoriesSizes
    },
    {
        id: 36,
        image: 'mcqueenWallet.jpg',
        brand: 'mcqueen',
        price: 2640,
        gender: Gender.Male,
        type: Clothes.Accessories,
        description: 'Знаковое для бренда изображение черепа стало ритмичным узором на этом портмоне двойного сложения. Черный рисунок контрастирует с бежевым оттенком гладкой матовой кожи и перекликается с однотонной внутренней отделкой. Аксессуар с двумя отсеками для купюр дополнили восемью слотами для кредитных карт и двумя карманами для чеков.',
        sizes: accessoriesSizes
    },
    {
        id: 37,
        image: 'brunBelt.jpg',
        brand: 'Brun',
        price: 990,
        gender: Gender.Male,
        type: Clothes.Accessories,
        description: 'Коричневый ремень универсальной ширины мастера марки выполнили из плотной, но при этом пластичной кожи, тщательно выделанной вручную. Фактуру материала подчеркнули, отполировав до деликатного блеска. Модель застегивается фигурной пряжкой, которой вторит наконечник.',
        sizes: accessoriesSizes
    },
    {
        id: 38,
        image: 'zenithWatch1.jpg',
        brand: 'Zenith',
        price: 12400,
        gender: Gender.Male,
        type: Clothes.Watch,
        description: 'Механизм с автоматическим подзаводом Запас хода: 50 ч Корпус: 43 мм, сталь, однонаправленный вращающийся безель Чёрный циферблат, арабские цифры, люминесцентные метки и стрелки Чёрный ремешок из телячьей кожи Водонепроницаемость: 50 м Часы, минуты, секундная стрелка на 9-ти часах Хронограф Ограниченная серия: 1000 шт',
        sizes: accessoriesSizes
    },
    {
        id: 39,
        image: 'chopardWatch.jpg',
        brand: 'Chopard',
        price: 22640,
        gender: Gender.Male,
        type: Clothes.Watch,
        description: 'Механизм с автоматическим подзаводом Запас хода: 60 ч Корпус: 42 мм, титан Чёрно-серый циферблат Чёрный каучуковый ремешок Водонепроницаемость: 50 м Часы, минуты, секунды, дата Мировое время Ограниченная серия: 250 штук',
        sizes: accessoriesSizes
    },
    {
        id: 40,
        image: 'breitlingWatch.jpg',
        brand: 'Breitling',
        price: 11990,
        gender: Gender.Male,
        type: Clothes.Watch,
        description: 'Механизм с автоматическим подзаводом Запас хода: 70 ч Корпус: 46 мм, сталь, вращающийся безель Чёрный циферблат, арабские цифры Коричневый ремешок из телячьей кожи Водонепроницаемость: 30 м Часы, минуты, секунды',
        sizes: accessoriesSizes
    }
]