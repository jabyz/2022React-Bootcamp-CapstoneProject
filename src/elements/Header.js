import styled from "styled-components";
import Logo from "../elements/Logo";
import ShowShopCart from "../elements/ShowShopCart";

const NavBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-gap: 5px;
  background-color: #eee;
`;

const SearchInput = styled.input`
  height: 48px;
  width: 100%;
  border: 0;
  padding: 0;
`;

const Header = () => {
  return (
    <>
      <NavBarMenu>
        <Logo />
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

          <button type="submit">
            <span className="fa-stack fa-2x">
              <i className="fa-solid fa-magnifying-glass fa-stack-1x" />
            </span>
          </button>
        </div>
        <ShowShopCart />
      </NavBarMenu>
    </>
  );
};

export default Header;
