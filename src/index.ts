import styled from "styled-components";

export const Container = styled.main`
  height: 100dvh;
  display: flex;
`;

export const ContentLeft = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper-box {
    max-width: 468px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .wrapper-input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ContentRight = styled.div`
  width: 50%;
  height: 100%;

  border: 1px solid green;
`;
