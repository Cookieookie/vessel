import { useState, useEffect } from 'react';
import ProductModel from '../models/ProductModel';


export function ProductList() {

    const [products, setProducts] = useState<ProductModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(()=> {
        const fetchProducts = async () => {
            const baseUrl: string = "http://localhost:8080/api/products";
        };
        fetchProducts().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);



    return(
        <div>
        <h1>Product List works!</h1>
        </div>
    )
}