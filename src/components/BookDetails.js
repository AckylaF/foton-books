import Header from './Header';

export default function BookDetails({ book }) {
  return (
    <>
      <Header />
      <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
    </>
  )
}