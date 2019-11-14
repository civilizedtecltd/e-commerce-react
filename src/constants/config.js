
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

     get _ALL_BOOKS(){
         return `${this.API}/product/books`;
     }
     _SINGLE_BOOK(id){
         return `${this.API}/product/book/${id}`
     }
 }

 const URL = new APP_URL();
 export {
     URL
 };
