
  class APP_URL {
     constructor(){
        this.BASE = `http://63.33.69.86:4040`;
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

     _GET_USER(id){
         return `${this.API}/user/${id}`;
     }

     get _ALL_BOOKS(){
         return `${this.API}/product/all-books`;
     }
     _SINGLE_BOOK(id){
         return `${this.API}/product/book/${id}`
     }

     _CATEGORY_BOOKS(id){
        return `${this.API}/product/category/${id}`
     }
 }

 const URL = new APP_URL();
 export {
     URL
 };
