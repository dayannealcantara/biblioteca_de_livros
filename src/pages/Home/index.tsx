import React, {
  useState,
} from 'react';

import { FiChevronLeft, FiChevronRight, FiPlus, FiSearch, FiEdit3, FiTrash } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Bookshelf from '../../assets/bookshelf.png';

import {
  Container,
  Left,
  ImageContainer,
  Right,
  RightHeaderContainer,
  NewButton,
  InputContainer,
  Input,
  BooksList,
  BooksListHeader,
  TitleHeaderContainer,
  AuthorHeaderContainer,
  StatusHeaderContainer,
  Books,
  Content,
  ActionButtonsContainer,
  ActionButton,
  BooksListFooter,
  ButtonsContainer,
  TotalText,
} from './styles';

const Home = () => {
  const [term, setTerm] = useState('');

  const history = useHistory();

  const handleSubmit = () => {
    console.log('Submit');
  };

  const handleRedirectToForm = () => {
    return history.push('/book');
  }

  return (
    <Container>
      <Left>
        <h1>My <br />Book<br />Shelf</h1>
        <ImageContainer>
          <img src={Bookshelf} alt="Bookshelf" />
        </ImageContainer>
      </Left>
      <Right>
        <RightHeaderContainer>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <InputContainer>
              <Input
                placeholder="What's happening?"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
              />
              <div>
                <FiSearch size={20} color="#BDBDBD" />
              </div>
            </InputContainer>
          </form>
          <NewButton onClick={handleRedirectToForm}>
            Novo
            <FiPlus size={20} color="#fff"/>
          </NewButton>
        </RightHeaderContainer>

        <BooksList>
          <BooksListHeader>
            <TitleHeaderContainer>
              <h3>Título</h3>
            </TitleHeaderContainer>
            <AuthorHeaderContainer>
              <h3>Autor</h3>
            </AuthorHeaderContainer>
            <StatusHeaderContainer>
              <h3>Status</h3>
            </StatusHeaderContainer>
            <StatusHeaderContainer>
              <h3>&nbsp;</h3>
            </StatusHeaderContainer>
          </BooksListHeader>
          <Books>
            <Content>
              <h2>Teste</h2>
              <p>Autor de teste</p>
              <p>À 10 minutos</p>
              <ActionButtonsContainer>
                <ActionButton>
                  <FiEdit3 size={22} color="#55409C"/>
                </ActionButton>
                <ActionButton>
                  <FiTrash size={22} color="#55409C"/>
                </ActionButton>
              </ActionButtonsContainer>
            </Content>
          </Books>
          <Books>
            <Content>
              <h2>Teste</h2>
              <p>Autor de teste</p>
              <p>À 10 minutos</p>
              <ActionButtonsContainer>
                <ActionButton>
                  <FiEdit3 size={22} color="#55409C"/>
                </ActionButton>
                <ActionButton>
                  <FiTrash size={22} color="#55409C"/>
                </ActionButton>
              </ActionButtonsContainer>
            </Content>
          </Books>
          <BooksListFooter>
            <ButtonsContainer>
              <button
                type="button"
                onClick={() => { }}
              >
                <FiChevronLeft size={25} color="#55409C" />
              </button>
              <TotalText>2 itens</TotalText>
              <button
                type="button"
                onClick={() => { }}
              >
                <FiChevronRight size={25} color="#55409C" />
              </button>
            </ButtonsContainer>
          </BooksListFooter>
        </BooksList>
      </Right>
    </Container>
  );
};

export default Home;
