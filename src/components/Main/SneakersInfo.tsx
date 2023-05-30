import styled from "styled-components";

const SneakersInfo = (): JSX.Element => {
  return (
    <MainInfo>
      <div>
        <h3> Sneaker Company</h3>
        <h2> Fall Limited Edition Sneakers</h2>
      </div>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
    </MainInfo>
  );
};

const MainInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 24px;
  margin-bottom: 28px;
  gap: 15px;
  padding: 0 24px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 19px;

    h3 {
      font-size: 12px;
      font-weight: 700;
      line-height: 15px;
      letter-spacing: 1.8461538553237915px;
      color: #ff7e1b;
      text-transform: uppercase;
    }

    h2 {
      font-size: 28px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0px;
      text-align: left;
      color: #1d2026;
    }
  }

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    color: #69707d;
  }
`;
export default SneakersInfo;
