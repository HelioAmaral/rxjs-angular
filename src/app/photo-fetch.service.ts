import { Injectable } from '@angular/core';
//import httpClient (a class) to allow us to make the http request
import { HttpClient } from '@angular/common/http';


//we create an interface to specify to TS what we are expecting to get as a response from our request
//then we apply it as the generic type to the get method bellow, like:
//return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random ... this will tell TS what type are we getting
interface UnsplashResponse{
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchService {

  //Dependency injection to get access to the HttpClient
  constructor(private http: HttpClient) { }

  //create a method where we write our request to unsplash API
  getPhoto(){
    //https://api.unsplash.com/ is the API location and photos/random is the end point from where we want to get our response
    //we need to add our access key, in this case with a header
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        //headers name and 'Client-ID' comes directly from the documentation and following it is our access key provided when we created a new app in unsplash
        Authorization: 'Client-ID nI4VUiSMMInjfb_Lhdzpc0onI6kQGV7tGoKZpMkvVKE'
      }
    })
  }
}
