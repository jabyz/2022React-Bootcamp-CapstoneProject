import styled from "styled-components";
const LogoSpan = styled.span`
  margin: 0 auto;
`;
const Logo = () => {
  return (
    <LogoSpan
      className="fa-stack fa-2x"
      onClick={() => window.location.reload()}
    >
      <i className="fa-regular fa-star fa-stack-2x" />
      <i className="fa-solid fa-skull-crossbones fa-stack-1x" />
    </LogoSpan>
  );
};

export default Logo;
