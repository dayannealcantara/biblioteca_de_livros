import React, { FormEvent, useState, useCallback } from 'react';

import { FiPlus, FiClipboard, FiUser } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Bookshelf from '../../assets/bookshelf.png';

import {
  Container,
  Left,
  ImageContainer,
  Right,
  NewButton,
  InputContainer,
  Input,
  FormContainer,
  FormContainerHeader,
  Content,
  BooksListFooter,
} from './styles';

const Home = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('');

  const history = useHistory();

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const data = {
        title,
        author,
        status,
      };
      await api.post('/books', data);

      history.push('/');
    },
    [title, author, status],
  );

  return (
    <Container>
      <Left>
        <h1>
          My
          <br />
          Book
          <br />
          Shelf
        </h1>
        <ImageContainer>
          <img src={Bookshelf} alt="Bookshelf" />
        </ImageContainer>
      </Left>
      <Right>
        <FormContainer>
          <FormContainerHeader>
            <h3>Novo livro</h3>
            {/* Name of the book if is editing or "Novo livro" whether is creating */}
          </FormContainerHeader>
          <form onSubmit={handleSubmit}>
            <Content>
              <InputContainer>
                <Input
                  placeholder="Título"
                  defaultValue={title}
                  onBlur={e => setTitle(e.target.value)}
                  // onChange={(e) => setTweet(e.target.value)}
                  // value={tweet}
                />
                <div>
                  <FiClipboard size={20} color="#BDBDBD" />
                </div>
              </InputContainer>
              <InputContainer>
                <Input
                  placeholder="Autor"
                  defaultValue={author}
                  onBlur={e => setAuthor(e.target.value)}
                  // onChange={(e) => setTweet(e.target.value)}
                  // value={tweet}
                />
                <div>
                  <FiUser size={20} color="#BDBDBD" />
                </div>
              </InputContainer>
              <InputContainer>
                <Input
                  placeholder="status"
                  defaultValue={status}
                  onBlur={e => setStatus(e.target.value)}
                  // onChange={(e) => setTweet(e.target.value)}
                  // value={tweet}
                />
                <div>
                  <FiUser size={20} color="#BDBDBD" />
                </div>
              </InputContainer>
            </Content>
            <BooksListFooter>
              <NewButton type="submit">
                Novo
                <FiPlus size={20} color="#fff" />
              </NewButton>
            </BooksListFooter>
          </form>
        </FormContainer>
      </Right>
    </Container>
  );
};

export default Home;
