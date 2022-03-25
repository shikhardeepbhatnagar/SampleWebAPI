import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/products";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
}

export default function ProductList({products}: Props) {
    return (
    <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item xs={3} key={product.id} >
                        <ProductCard product={product} />
                    </Grid>
                ))}
    </Grid>
    )
}
// xs is for no. of cards in a row