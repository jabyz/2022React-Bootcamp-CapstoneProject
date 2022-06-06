import styled from "styled-components";
import mock from "../mocks/en-us/featured-products.json";

const FeaturedProductsContainer = styled.div`
  .small {
    max-height: 200px;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  .divProduct {
    border: 1px solid #eee;
  }
`;

const FeaturedProducts = () => {
  console.log(mock.results);
  return (
    <FeaturedProductsContainer>
      {mock.results.map((m) => {
        return (
          <div key={m.id} className="divProduct">
            <img
              className="small"
              src={m.data.mainimage.url}
              alt={m.data.mainimage.alt}
            />
            <h3>{m.data.name}</h3>
            <h3>{m.data.category.id}</h3>
            <h3>${m.data.price}</h3>
          </div>
        );
      })}
    </FeaturedProductsContainer>
  );
};

export default FeaturedProducts;
