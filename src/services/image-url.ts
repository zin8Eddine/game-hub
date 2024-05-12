
import noImg from "../assets/no-image-placeholder.webp"
function GetcorrpedImg(url:string){
    

    if (!url) return noImg
    const target = "media/"
    const index = url.indexOf(target) + target.length

    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)

}
export default GetcorrpedImg