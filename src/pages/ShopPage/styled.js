import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 15%;
  right: 5%;
  z-index: 999;
  //@media (max-width: 400px) {
  //  top: 28%;
  //}
  //@media (max-width: 385px) {
  //  top: 31%;
  //}
  //
  //@media (max-width: 338px) {
  //  top: 23%;
  //}

  .filter {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: #000;
    opacity: 0.6;
    color: #fff;
    display: none;
    cursor: pointer;

    @media (max-width: 990px) {
      display: block;
    }
  }

  .filter svg {
    position: absolute;
    top: 25%;
    left: 23%;
    font-size: 20px;
  }
`;
export const PaginationRowWrapper = styled.div`
  /* @media (max-width: 990px) {
    .Pagination-Row {
      background-color: #f6f6f6;
      z-index: 99;
      position: fixed;
      top: 5%;
      left: 6.7%;
      width: 80%;
      padding: 1rem;
      display: none;
    }
    .show {
      display: block;
    }
  } */
`;
