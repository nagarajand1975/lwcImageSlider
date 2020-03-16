import { LightningElement,api } from 'lwc';
import resources from '@salesforce/resourceUrl/SliderResources'

export default class Slider extends LightningElement {

    @api imageList;
    @api imageName1;
    @api imageName2;
    @api imagName3;
    @api count=2;
    imageList=resources;
    @api img;
    
     /******* Removes hideImage class and Add showImage class in an interval of 3 secs */
     slideImages(){
        for(let j=1;j<=3;j++){
        this.template.querySelector('div:nth-child('+j+')').classList.add('hideImage');
        this.template.querySelector('div:nth-child('+j+')').classList.remove('showImage');
        }
      
        this.template.querySelector('div:nth-child('+this.count+')').classList.remove('hideImage');
        this.template.querySelector('div:nth-child('+this.count+')').classList.add('showImage');
        this.template.querySelector('div:nth-child('+this.count+')').classList.add('fade');
        
        this.count+=1;
         if(this.count==4)
            this.count=1;
             setTimeout(() => {
            this.slideImages();
         }, 3000);
    }

    renderedCallback() {
        this.slideImages();
    }

    connectedCallback(){
        this.imageName1 = this.imageList + "/images/1.jpg";
        this.imageName2 = this.imageList + "/images/2.jpg";
        this.imageName3 = this.imageList + "/images/3.jpg";
    }

}