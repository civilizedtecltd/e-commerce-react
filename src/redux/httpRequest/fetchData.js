
import axios from 'axios'
const allBooks = async ()=> {
  const result = await axios('http://localhost:3333/api/product/book');
  return result.data.data;
}

export default allBooks;








