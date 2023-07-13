import { ProductPageData as ManData} from "../data/ManProductPage.data";
import { ProductPageData as WomanData } from "../data/WomanProductPage.data";

export const PageService = {
    
    async getByID(id: string, linkFlag: string) {
        let data = linkFlag === 'man-choose' ? ManData : WomanData;
        return data[parseInt(id) - 1];
    }
}