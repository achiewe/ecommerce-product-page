import styled from "styled-components";
import { useState } from "react";
import product1 from "../../images/image-product-1.jpg";
import product2 from "../../images/image-product-2.jpg";
import product3 from "../../images/image-product-3.jpg";
import product4 from "../../images/image-product-4.jpg";
import imgthumb1 from "../../images/image-product-1-thumbnail.jpg";
import imgThumb2 from "../../images/image-product-2-thumbnail.jpg";
import imgThumb3 from "../../images/image-product-3-thumbnail.jpg";
import imgThumb4 from "../../images/image-product-4-thumbnail.jpg";

const SneakersImgDesk = (): JSX.Element => {
  const imagesArray = [product1, product2, product3, product4];
  const imagesThumb = [imgthumb1, imgThumb2, imgThumb3, imgThumb4];
  const [chooseImage, setChooseImage] = useState<string>(imagesArray[0]);

  const handleClick = (Img: string) => {
    setChooseImage(Img);
  };

  return (
    <MainDiv>
      <img className="image-main" src={chooseImage} alt="images" />
      <div className="main-thumb">
        {imagesArray.map((image, index) => (
          <img
            key={index}
            onClick={() => handleClick(image)}
            className="image-thumb"
            src={imagesThumb[index]}
            alt="image thumb"
          />
        ))}
      </div>
      <div className="overlay-div">
        <div className="overlay-imgmain">
          <svg
            className="close"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2,2 L18,18 M18,2 L2,18"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
          <img className="overlay-prod" src={product1} alt="image product" />
        </div>
        <div className="main-thumb">
          {imagesArray.map((image, index) => (
            <img
              key={index}
              onClick={() => handleClick(image)}
              className="image-thumb"
              src={imagesThumb[index]}
              alt="image thumb"
            />
          ))}
        </div>
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

  .overlay-div {
    width: 550px;
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 40px;
    justify-content: center;
    background-color: black;
    left: 32%;
    top: 89px;
    align-items: center;

    .overlay-imgmain {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      justify-content: flex-end;
      align-items: flex-end;

      .close {
        cursor: pointer;
      }

      .overlay-prod {
        width: 550px;
        height: 550px;
        border-radius: 15px;
      }
    }
  }
`;
export default SneakersImgDesk;
