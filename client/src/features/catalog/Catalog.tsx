import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/products";
import ProductList from "./ProductList";

export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list().then(products => setProducts(products)).catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  if(loading)
    return <LoadingComponent message="Loading products..." />

  return (
        <>
            <ProductList products={products} />
        </>   
    )
}

// Point1: props: any
// Point2: {products, addProduct} properties we are interested in
{/* <ul>
                {products.map((product) => (
                <li key={product.id}>
                    {product.name} - {product.price}
                </li>
                ))}
                </ul>
            <button onClick={addProduct}>Add Product</button> */}

            // function addProduct(){
            //     setProducts(prevState => [...prevState, 
            //       {
            //         id: prevState.length + 101,
            //         name: 'product' + (prevState.length + 1), 
            //         price: (prevState.length * 100) + 100,
            //         brand: 'some brand',
            //         description: 'some desc',
            //         pictureUrl: 'http://picsum.photos/200'
            //       }])
            //   }

            // <Button variant='contained' onClick={addProduct}>Add Product</Button>