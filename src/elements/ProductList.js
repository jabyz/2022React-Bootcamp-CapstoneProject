import styled from "styled-components";
import mock from "../mocks/en-us/product-categories.json";
import mockProducts from "../mocks/en-us/products.json";
import { useState } from "react";

import "../App.css";

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
`;
const ProductsContainer = styled.div`
  .small {
    max-height: 200px;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  .divProduct {
    border: 1px solid #eee;
  }
`;

const ProductList = () => {
  const handleViewCategory = (event) => {
    event.currentTarget.classList.toggle("btn-active");
    event.currentTarget.classList.toggle("btn-inactive");

    if (event.currentTarget.classList.contains("btn-active") === true) {
      setFilterList([...filterList, event.currentTarget.value]);
    }

    if (event.currentTarget.classList.contains("btn-inactive") === true) {
      const newFilterList = [...filterList];
      newFilterList.splice(event.currentTarget.value);
      setFilterList(newFilterList);
    }
  };
  const [filterList, setFilterList] = useState([""]);

  return (
    <>
      <RowContainer>
        <div className="col-sidebar">
          {mock.results.map((m) => {
            return (
              <div key={m.id} className="">
                <button
                  type="button"
                  style={{
                    display: "block",
                    height: "32px",
                    fontSize: "20px",
                    width: "100%",
                    margin: "50px 0",
                  }}
                  value={m.id}
                  className="btn-inactive"
                  onClick={handleViewCategory}
                >
                  {m.data.name}
                </button>
              </div>
            );
          })}
        </div>
        <div className="col-grid-products">
          <ProductsContainer>
            {mockProducts.results
              .filter((el) => {
                return Array.from(filterList).includes(el.data.category.id);
              })
              .map((m) => {
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
          </ProductsContainer>
          <button
            type="button"
            style={{
              height: "32px",
              fontSize: "20px",
              margin: "50px 0",
              width: "50%",
            }}
            value="back"
            className="btn-inactive"
            onClick={handleViewCategory}
          >
            BACK
          </button>
          <button
            type="button"
            style={{
              height: "32px",
              fontSize: "20px",
              margin: "50px 0",
              width: "50%",
            }}
            value="next"
            className="btn-inactive"
            onClick={handleViewCategory}
          >
            NEXT
          </button>
        </div>
      </RowContainer>
    </>
  );
};

export default ProductList;
