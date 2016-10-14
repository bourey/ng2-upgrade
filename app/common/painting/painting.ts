export class Painting {
    id: string;
    name: string;
    date: string;
    imgUrl: string;
    artistId: string;
    constructor(id: string, name: string, date: string, imgUrl: string, artistId: string) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.imgUrl = imgUrl;
        this.artistId = artistId;
    }
}