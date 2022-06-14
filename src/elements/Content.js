import FeaturedBanners from "../elements/FeaturedBanners";
import FeaturedProducts from "../elements/FeaturedProducts";
import ProductCategories from "../elements/ProductCategories";
import { useState, createContext } from "react";
import ProductList from "./ProductList";

const ViewAllProductsContext = createContext();

const Content = () => {
  const [viewAllProducts, setViewAllProducts] = useState(false);
  return (
    <>
      <ViewAllProductsContext.Provider value={viewAllProducts} />

      {viewAllProducts === false ? (
        <>
          <h2 style={{ textAlign: "center" }}>Featured</h2>
          <FeaturedBanners />
          <button
            type="button"
            style={{
              display: "block",
              height: "32px",
              fontSize: "20px",
              width: "100%",
            }}
            onClick={() => setViewAllProducts(true)}
          >
            View All Products
          </button>
          <h2 style={{ textAlign: "center" }}>Product Categories</h2>
          <ProductCategories />
          <h2 style={{ textAlign: "center" }}>Featured Products</h2>
          <FeaturedProducts />
        </>
      ) : (
        <ProductList />
      )}
    </>
  );
};

export default Content;

export {ViewAllProductsContext};