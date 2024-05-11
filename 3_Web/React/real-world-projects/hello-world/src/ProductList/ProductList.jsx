import { useSelector, useDispatch } from "react-redux";
// const products = [
//     { title: 'Cabbage', isFruit: false, id: 1 },
//     { title: 'Garlic', isFruit: false, id: 2 },
//     { title: 'Apple', isFruit: true, id: 3 },
// ];

const ProductItem = ({ title, isFruit, id}) => <li key={id} style={{color: isFruit ? 'green': 'red'}}> {title} </li>;


const ProductList = () => {
    
    const dispatch = useDispatch();

    const { products } = useSelector(state => {
        return {
            products: state.products.products
        }
    })
    console.log("Products", products);
    return products.map(item => {
        return <ProductItem {...item }/>
    });
};


export default ProductList;