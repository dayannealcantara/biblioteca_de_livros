import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  FormEvent,
} from 'react';

import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiSearch,
  FiEdit3,
  FiTrash,
} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

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

export interface IBook {
  id: number;
  title: string;
  author: string;
  status: string;
}

type Page = {
  newPage: -1 | 1;
};

const Home = () => {
  const [data, setData] = useState<IBook[]>([]);
  const [term, setTerm] = useState('');
  const [page, setpage] = useState(0);

  const history = useHistory();

  async function fetchData(currentPage: number) {
    const response = await api.get(`/books`, {
      params: {
        _sort: 'title',
        _order: 'desc',
        _limit: 5,
        _page: currentPage,
      },
    });
    setData(response.data);
  }
  useEffect(() => {
    fetchData(page);
  }, [page]);

  const totalBooks = useMemo(() => data?.length, [data]);
  const deleteBook = useCallback(
    async (id: number) => {
      await api.delete(`/books/${id}`);

      const newData = data?.filter(book => book.id !== id);
      setData(newData);
    },
    [data],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const response = await api.get(`/books?q=${term}`);
      setData(response.data);
    },
    [term],
  );

  const handleRedirectToForm = (book?: IBook) => {
    return history.push({
      pathname: '/book',
      state: {
        book,
      },
    });
  };
  const handleUpdatePage = ({ newPage }: Page) => {
    setpage(currentPage => currentPage + newPage);
  };

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
        <RightHeaderContainer>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <InputContainer>
              <Input
                placeholder="Seu livro favorito aqui!"
                onChange={e => setTerm(e.target.value)}
                value={term}
              />
              <button type="submit">
                <FiSearch size={20} color="#BDBDBD" />
              </button>
            </InputContainer>
          </form>
          <NewButton onClick={() => handleRedirectToForm()}>
            Novo
            <FiPlus size={20} color="#fff" />
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
          {data?.map(book => (
            <Books key={book.id}>
              <Content>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.status}</p>
                <ActionButtonsContainer>
                  <ActionButton onClick={() => handleRedirectToForm(book)}>
                    <FiEdit3 size={22} color="#55409C" />
                  </ActionButton>
                  <ActionButton onClick={() => deleteBook(book.id)}>
                    <FiTrash size={22} color="#55409C" />
                  </ActionButton>
                </ActionButtonsContainer>
              </Content>
            </Books>
          ))}
          <BooksListFooter>
            <ButtonsContainer>
              <button
                type="button"
                onClick={() => handleUpdatePage({ newPage: -1 })}
              >
                <FiChevronLeft size={25} color="#55409C" />
              </button>
              <TotalText>
              {totalBooks} livros
              </TotalText>
              <button
                type="button"
                onClick={() => handleUpdatePage({ newPage: 1 })}
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
