
import { products } from "./data/products";

// array of objects
function App() {
  return (
    <div className="container my-5">
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {product.title}{" "}
                <span className="badge text-bg-primary">
                  Rs. {product.price}
                </span>
              </h5>
              <p className="card-text">{product.desc}</p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;


