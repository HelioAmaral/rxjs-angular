import { Component } from '@angular/core';
//import the photo-fetch service to be able to make the http request
import { PhotoFetchService } from '../photo-fetch.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css']
})
export class PhotoDisplayComponent {

  //property photo will store the result from the http request
  photo= '';


  //make use of dependency injection to access that PhtoFetchService inside the component class
  constructor(private photoFetchService: PhotoFetchService){
    //inside the constructor we call the helper function that containes the code for the http request
this.fetchPhoto();
  }

  //button 'NEW IMAGE' click, calls the function to get a new random photo
  onClick(){
this.fetchPhoto();
  }
  

  //this helper function, allow us to write the http request code only once, then we can call this function wherever we need to use the code
  fetchPhoto(){
   // we call the getPhoto() from the photo-fetch.service
  //when we call it, it return to us an observable, the request is not actually issued until we add on a subscribe statement
  this.photoFetchService.getPhoto().subscribe((response) => {
    //console.log(response.urls.regular);
    this.photo = response.urls.regular;
  });

}
}
