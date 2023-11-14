import { getPictures } from "mal-scraper"

async function malPicture(){
    console.log( await getPictures("Dragon Ball Super: Broly"))
}

malPicture()