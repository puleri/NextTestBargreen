import ProductTile from 'components/ProductTile';
import classes from './Catalog.module.css';

interface CatalogProps {
    name: string;
    products: any[];
}

function Catalog(props: CatalogProps) {
    console.log("catalog props ", props)
    const { name, products } = props;
    
    return (
        <div className={classes.catalog}>
            <div className={classes.catalogHeader}>
                <h2>{name}</h2>
            </div>
            <div className={classes.catalogBody}>
                {products.map(product => (
                    <ProductTile key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Catalog;