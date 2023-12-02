import { useState, useEffect } from "react";
import ProductCard from "./ProductCard"
import NavBar from "./NavBar";
import { useTokenContext } from '../context/TokenContext';
import { getProducts } from '../API/api';
import { getCategories } from '../API/api';

const Products = () => {
    const { cartItems, addToCart } = useTokenContext();
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null)
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = () => {
      const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      setSortOrder(newSortOrder);
    };

    const fetchData = async(category,sortOrder) => {
        const list = await getProducts(category,sortOrder); 
        let categoryList = await getCategories(); 
        categoryList = [...["All"], ...categoryList];
        setCategories(categoryList)
        setProductList(list)
        
    }  

   useEffect(() => {
       fetchData(category,sortOrder);
   },[category,sortOrder])


   const onSelect = (item) => {
        const category = item === "All" ? null : item;
        setCategory(category)
   }

   return <div>
        <NavBar categories={categories} onSelect={onSelect} sortOrder={sortOrder} handleSort={handleSort} cartCount={cartItems.length} />
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            { productList.map(item => <ProductCard key={item.id} product={item} addToCart={addToCart} />)}
        </div>
   </div>
}
export default Products