import Product from "./Product.jsx";

function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
    // let options2 = { a: "hi-tech", b: "durable", c: "fast" };
    return (
        <>
          <Product title="phone" price={60000} />
          <Product title="laptop" price={145000} /> 
          <Product title="pen" price={220} />
        </>
    );
}

export default ProductTab;