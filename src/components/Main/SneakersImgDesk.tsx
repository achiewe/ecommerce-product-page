import styled from "styled-components";
import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";
import imgthumb1 from "../../images/image-product-1-thumbnail.jpg";

const SneakersImgDesk = (): JSX.Element => {
  const images = [product1, product2, product3, product4];
  return (
    <MainDiv>
      <img className="image-main" src={product1} alt="images" />
      <div className="main-thumb">
        <img className="image-thumb" src={imgthumb1} alt="image thumb" />
      </div>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  display: none;
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    .image-main {
      width: 445px;
      height: 445px;
      border-radius: 15px;
      cursor: pointer;
    }

    .main-thumb {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 31px;

      .image-thumb {
        width: 88px;
        height: 88px;
        border-radius: 10px;
        cursor: pointer;
        border: 3px solid #ff7e1b;
        opacity: 0.75;

        :hover {
          opacity: 0.5;
        }
      }
    }
  }
`;
export default SneakersImgDesk;
