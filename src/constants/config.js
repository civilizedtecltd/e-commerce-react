import * as path from 'path';

require('dotenv').config({path: path.join('/home/dell/Freelancing/book_eCommerce/e-commerce-react', '.env')});

  class APP_URL {
     constructor(){

        this.BASE = `http://localhost:3333`;
        this.API  = `${this.BASE}/api`;
     }

     get _CATEGORY(){
         return `${this.API}/category`;
     }

     get _REGISTER(){
         return `${this.API}/auth/register`;
     }

     get _LOGIN(){
         return `${this.API}/auth/login`;
     }

     get _LOGOUT(){
        return `${this.API}/auth/logout`;
     }

     _GET_USER(id){
         return `${this.API}/user/${id}`;
     }

      _ALL_BOOKS(page, show){
         return `${this.API}/product/all-books/${page}/${show}`;
     }
     _SINGLE_BOOK(id){
         return `${this.API}/product/book/${id}`
     }

     _CATEGORY_BOOKS(id, page , show){
        return `${this.API}/product/category/${id}/${page}/${show}`
     }

    get _FAVORITE_ITEMS(){
         return `${this.API}/user/favorite`;
     }
    _DELETE_FAVORITE(id){
        return `${this.API}/user/favorite/${id}/delete`
    }
    _SEARCH_BOOK(page,show, keyword){
        return `${this.API}/filter/${page}/${show}/${keyword}`
    }     
 }

 const URL = new APP_URL();
 export {
     URL
 };
