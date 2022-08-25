import React, { useState, useEffect } from "react";
import classes from './category.module.css';
import ProductTile from "components/ProductTile";
import Catalog from "@/components/Catalog/Catalog";


interface CategoryProps {
    name: string;
    products: any[];
}

function Category(props: CategoryProps): any {
    console.log(props, "categoryprops")
    const { name, products } = props;

    return (
        <div className={classes.root}>
            <Catalog name={name} products={products} />
        </div>
    )
}

export default Category;

export async function getServerSideProps(context) {
    const { query } = context;
    const { id } = query;

    const products = await fetch(`https://fakestoreapi.com/products/category/${id}`)
        .then(res => res.json());

    return {
        props: {
            name: id,
            products
        }
    }
}
