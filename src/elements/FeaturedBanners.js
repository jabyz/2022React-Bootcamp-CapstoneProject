import styled from "styled-components";
import mock from "../mocks/en-us/featured-banners.json";

const FeaturedBannersContainer = styled.div`
  .horizontal-snap {
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    padding: 1rem 0;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    height: 300px;
  }

  .horizontal-snap > a {
    scroll-snap-align: start;
  }

  .horizontal-snap img {
    min-width: 80vw;
    height: 300px;
    border-radius: 5px;
  }
`;

const FeaturedBanners = () => {
  return (
    <FeaturedBannersContainer>
      <div className="horizontal-snap">
        {mock.results.map((m) => {
          return (
            <a href="#" key={m.id}>
              <img src={m.data.main_image.url} alt="" />
            </a>
          );
        })}

        {/* <a href="#"> 
        <img src="https://picsum.photos/id/122/640/640" alt="" />
        </a>*/}
      </div>
    </FeaturedBannersContainer>
  );
};

export default FeaturedBanners;
