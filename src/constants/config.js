
  class APP_URL {
     constructor(){
        this.BASE = `http://localhost:3333`;
        this.API  = `${this.BASE}/api`;
     }

     get _CATEGORY(){
         return `${this.API}/category`
     }
 }

 const URL = new APP_URL();
 export {
     URL
 };
