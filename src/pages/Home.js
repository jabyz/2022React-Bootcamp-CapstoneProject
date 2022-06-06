import styled from "styled-components";
import FeaturedBanners from "../elements/FeaturedBanners";
import FeaturedProducts from "../elements/FeaturedProducts";
import ProductCategories from "../elements/ProductCategories";

const NavBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-gap: 5px;
  background-color: #eee;
`;

const Footer = styled.footer`
  background-color: #eee;
  bottom: 0;
  text-align: center;
  margin: 0 auto;
  font-size: 24px;
  p {
    padding: 0;
    margin: 0;
  }
`;

const SearchInput = styled.input`
  height: 48px;
  width: 100%;
  border: 0;
  padding: 0;
`;

const Home = () => {
  return (
    <>
      <NavBarMenu>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img height="64px" alt="LogoJaviTienda" src="LogoJaviTienda.png" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchInput
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search Something"
            defaultValue=""
          />
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img height="48px" alt="LogoJaviTienda" src="shopCart.svg" />
        </div>
      </NavBarMenu>
      <h2 style={{ textAlign: "center" }}>Featured Products</h2>
      <FeaturedBanners />

      <h2 style={{ textAlign: "center" }}>Product Categories</h2>
      <ProductCategories />

      <h2 style={{ textAlign: "center" }}>Featured Products</h2>
      <FeaturedProducts />

      <Footer>
        <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
      </Footer>
    </>
  );
};

export default Home;
