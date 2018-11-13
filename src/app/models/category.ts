export class Category {

    id: number;
    title: string;
    imgUrl: string;
    info: string;
    parentId?: number;

    constructor(id: number, title: string, imgUrl: string, info: string) {
        this.id = id;
        this.title = title;
        this.imgUrl = imgUrl;
        this.info = info ? info : "";
    }
}