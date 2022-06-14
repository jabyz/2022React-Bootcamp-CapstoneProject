import styled from "styled-components";
const ShowShopCartSpan = styled.span`
  margin: 0 auto;
`;
const ShowShopCart = () => {
  return (
    <ShowShopCartSpan className="fa-stack fa-2x">
      <i className="fa-solid fa-cart-shopping fa-stack-1x" />
    </ShowShopCartSpan>
  );
};

export default ShowShopCart;
