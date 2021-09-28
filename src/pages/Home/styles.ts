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

export const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 656px;

  form {
    display: flex;
    justify-content: center;
  }
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
  max-width: 640px;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: var(--color-light-gray);
  
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
  max-width: 624px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  background-color: transparent;
  padding-left: 16px;
  
  ::placeholder {
    color: var(--color-gray);
  }
`;

export const BooksList = styled.div`
  margin: 16px 0;
  padding: 16px;
  
  width: 100%;
  max-width: 656px;
  border-radius: 4px;

  background-color: var(--color-light-gray);
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BooksListHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 8px;
  
  width: 100%;
  height: 48px;
`;

export const TitleHeaderContainer = styled.div`

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-primary);
  }
`;

export const AuthorHeaderContainer = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-primary);
  }
`;

export const StatusHeaderContainer = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-primary);
  }
`;

export const Books = styled.div`
  width: 100%;
  height: 48px;
  
  background-color: #fff;
  
  border-radius: 4px;
  
  padding: 8px;
  margin-bottom: 32px;
`;

export const Content = styled.div`
  max-height: 120px;

  display: flex;
  justify-content: space-between;
  
  h2 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 1.5;
    max-height: 45px;
    
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  
  p {
    font-size: 14px;
    color: #6C6C6C;
    margin-top: 8px;
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 48px;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
`;

export const BooksListFooter = styled.div`
  width: 100%;
  height: 32px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  button {
    background: none;
    border: none;
    height: 30px;
    
    display: flex;
    align-items: center;
    
    color: #55409C;
    font-size: 14px;
  }
`;

export const TotalText = styled.p`
  font-size: 14px;
  color: var(--color-primary);
  margin: 0 8px;
`;