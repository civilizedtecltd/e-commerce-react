import axios from 'axios'

export const ALL_PRODUCTS = axios({
    url:'http://localhost:3333/api/product/book',
    method:'GET'
})
.then(res=>res.json())
 .then(product=>product)
