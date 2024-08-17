import urls from '../utils/urls.js';
import Is from 'strong-type';

const is=new Is;

class Image {
    constructor(productCode) {
        is.string(productCode);
        
        super();
        
        return this.#fetchImage(urls.images.replace('${productCode}',productCode));
    } 

    async #fetchImage(url){
        this.base64Image=await this.loadRemote(url,'');

        return this;
    }
}

export {
    Image as default,
    Image
};