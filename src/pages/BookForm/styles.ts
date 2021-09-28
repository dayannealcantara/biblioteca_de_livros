import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(624px, 1fr));
`;

export const Left = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-primary);

  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    font-size: 5.6rem;
    color: #fff;
    letter-spacing: 2px;
    margin-top: 32px;
    margin-left: 48px;
    font-family: 'Amatic SC', cursive;
    align-self: flex-start;
    z-index: 1;
  }

  @media (max-width: 999px) {
    height: 350px;
    
    h1 {
      font-size: 2rem;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 533px;
  height: 399px;
  margin-top: -160px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 56px 16px 0;
`;

export const NewButton = styled.button`
  width: 128px;
  height: 40px;
  background-color: var(--color-primary);
  border: none;
  color: #fff;

  border-radius: 4px;

  margin-left: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;

  & svg {
    margin-left: 4px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 32px;
  
  div {
    padding: 0 8px;
    color: #fff;
    height: 100%;
    border: none;
    font-size: 14px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
    svg {
      margin-right: 8px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  background: transparent;
  padding-left: 16px;
  
  ::placeholder {
    color: var(--color-gray);
  }
`;

export const FormContainer = styled.div`
  margin: 16px 0;
  padding: 16px;
  
  width: 100%;
  max-width: 656px;
  border-radius: 4px;

  background-color: var(--color-light-gray);
  
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
  }
`;

export const FormContainerHeader = styled.div`
  width: 100%;
  height: 32px;

  h3 {
    color: var(--color-primary);
    font-weight: 500;
  }
`;

export const Content = styled.div`
  width: 100%;
  
  padding: 8px;
`;

export const BooksListFooter = styled.div`
  width: 100%;
  height: 32px;

  display: flex;
  justify-content: flex-end;
`;