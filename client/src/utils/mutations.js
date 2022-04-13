import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(
    $bookId: String!
    $title: String!
    $image: String
    $link: String
    $author: [String]
    $description: String!
  ) {
    addBook(
      bookId: $bookId
      title: $title
      image: $image
      link: $link
      author: $author
      description: $description
    ) {
      _id
      username
      email
      bookCount
      savedBooks {
        author
        description
        image
        link
        bookId
        title
      }
    }
  }

`;


export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    username
    bookCount
  }
}
`;


