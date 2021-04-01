import axios from 'axios'
import { ProductModel } from '../model/Product';
export const url_product = 'http://localhost:5030/product';
export class ProductService {
    getProduct() {
        return axios.get(url_product).then(resp => {
            console.log('====CONCCC')
            console.log(resp.data)
            return resp.data
        }).catch(res => console.log('res'))
    }
}

export const productService = new ProductService();
const [products , setProducts ] = React.useState([])
React.useEffect(() => {
    console.log(productService.getProduct())
}, [])