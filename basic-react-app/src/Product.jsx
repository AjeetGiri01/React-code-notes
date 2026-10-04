import "./Product.css";

function Product({ title, price, features, features2 }) {
    let isDiscount = price > 80000;
    let styles = {backgroundColor : isDiscount ? "aquamarine" : ""};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {isDiscount && <p>Discount of 5%</p>}
        </div> 
    );
}

export default Product;