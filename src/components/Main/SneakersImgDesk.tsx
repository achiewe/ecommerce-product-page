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

interface SneakersProps {
  activateOverlay: boolean;
  setActivateOverlay(activateOverlay: boolean): void;
}

const SneakersImgDesk = ({
  activateOverlay,
  setActivateOverlay,
}: SneakersProps): JSX.Element => {
  const imagesArray = [product1, product2, product3, product4];
  const imagesThumb = [imgthumb1, imgThumb2, imgThumb3, imgThumb4];
  const [chooseImage, setChooseImage] = useState<string>(imagesArray[0]);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const previousImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClick = (Img: string) => {
    setChooseImage(Img);
  };

  const OverlayClick = () => {
    setActivateOverlay(!activateOverlay);
  };

  return (
    <MainDiv activateOverlay={activateOverlay}>
      <img
        className="image-main"
        src={chooseImage}
        onClick={OverlayClick}
        alt="images"
      />
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
            onClick={() => {
              setActivateOverlay(false);
            }}
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
          <div className="arrow-main">
            <div className="div-arrow" onClick={previousImage}>
              <svg
                width="12"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className="left-right"
              >
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div className="div-arrow" onClick={nextImage}>
              <svg
                width="13"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className="left-right"
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          {imagesArray.map((image, index) => (
            <img
              key={index}
              className={`overlayProd ${index === imageIndex ? "active" : ""}`}
              src={image}
              alt="image product"
            />
          ))}
        </div>
        <div className="main-thumb">
          {imagesArray.map((images, index) => (
            <img
              key={index}
              onClick={() => handleClick(images)}
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

const MainDiv = styled.div<{ activateOverlay: boolean }>`
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
    display: ${(props) => (props.activateOverlay ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    gap: 40px;
    justify-content: center;
    left: 32%;
    z-index: 2;
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
        :hover path {
          stroke: #ff7e1b;
        }
      }

      .arrow-main {
        width: 600px;
        position: absolute;
        top: 45%;
        display: flex;

        right: -30px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .div-arrow {
        width: 56px;
        height: 56px;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        cursor: pointer;
        align-items: center;
        border-radius: 50%;
      }

      .div-arrow:hover .left-right path {
        stroke: #ff7e1b;
      }

      .left-right {
        cursor: pointer;
      }

      .close {
        cursor: pointer;
      }

      .overlayProd {
        width: 550px;
        height: 550px;
        border-radius: 15px;
        display: none;
      }

      .overlayProd .active {
        display: flex;
      }
    }
  }
`;
export default SneakersImgDesk;
