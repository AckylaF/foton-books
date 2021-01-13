import { useSelector } from 'react-redux';
import Header from './Header';

export default function BookDetails({ match }) {
  const book =  useSelector(state => {
    if (state !== undefined) {
      return state.books.filter(book => book.id === match.params.bookId)[0];
    }

    return {};
  });

  return (
    <>
      <Header />
      <article>
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
        <section>
          <h3>{book.volumeInfo.title}</h3>
          <h6>by {book.volumeInfo.authors[0]}</h6>
          <div>
            <span>{book.saleInfo.saleability === 'FOR_SALE' ? book.saleInfo.listPrice.amount : 'Not for sale'}</span>
          </div>
        </section>
        <span>{book.volumeInfo.pageCount}</span>
        <section>
          <button></button>
          <i className="fa fa-heart"></i>
        </section>
      </article>
    </>
  )
}