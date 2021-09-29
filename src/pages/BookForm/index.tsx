import React, { FormEvent, useState, useCallback, useEffect } from 'react';

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

import { IBook } from '../Home';

interface IState {
  book: IBook;
}

const Home = () => {
  const [id, setId] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('');

  const history = useHistory();

  useEffect(() => {
    const book = (history?.location?.state as IState)?.book;
    if (book !== null) {
      setId(book?.id);
      setTitle(book?.title);
      setAuthor(book?.author);
      setStatus(book?.status);
    }
  }, []);

  useEffect(() => {
    return () => {
      setId(null);
      setTitle('');
      setAuthor('');
      setStatus('');
    };
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const data = {
        title,
        author,
        status,
      };

      if (id) {
        await api.put(`/books/${id}`, data);
      } else {
        await api.post('/books', data);
      }

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
            <h3>{id ? title : 'Novo livro'}</h3>
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
                {id ? 'Editar' : 'Novo'}
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
