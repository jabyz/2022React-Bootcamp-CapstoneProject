import styled from "styled-components";

const FooterDiv = styled.footer`
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

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
      </FooterDiv>
    </>
  );
};

export default Footer;
