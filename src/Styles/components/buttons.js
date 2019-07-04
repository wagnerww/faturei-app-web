import styled from "styled-components";

export const Button = styled.button`
  background: #e94365;
  color: #fff;
  padding: 10px 25px;
  border-radius: 4px;
  font-size: 1.1em;
  border: 0;
  transition: all ease 0.5s;
  margin: 10px 0;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonMaior = styled(Button)`
  font-weight: bold;
  font-size: 1.5em;
  padding: 15px 35px;
  margin: 10px 0;
`;
