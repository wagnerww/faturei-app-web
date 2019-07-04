import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const TituloPart1 = styled.label`
  font-size: 4em;
  font-weight: bold;
  font-style: italic;
  color: #e94365;
`;

export const TituloPart2 = styled(TituloPart1)`
  color: #fff;
`;

export const ContainerConteudo = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & p {
    font-size: 1.8em;
  }

  & > div:first-child {
    flex: 1 1 320px;
    margin-bottom: 30px;
  }

  & > div {
    margin-left: 20px;
  }
`;

export const ContainerLogin = styled.div`
  flex: 1;
  border: 1px solid #888888;
  border-radius: 23px;
  padding: 30px;
`;
