import styled from "styled-components";

export const Container = styled.div`
  & span {
    font-size: 1em;
    color: #fff;
  }

  & input {
    padding: 10px;
    font-size: 0.8em;
    border-radius: 4px;
    border: 0;
    width: 100%;
    margin-bottom: 10px;

    &::placeholder {
      color: #959595;
    }
  }
`;
