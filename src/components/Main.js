import BookList from './BookList';
import Header from './Header';


export default function Main({ books }) {
  return (
    <>
      <Header home/>
      <BookList books={books} />
    </>
  )
}