import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { bindActionCreators } from 'redux';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
           <ul className="book-list">
               {
                   books.map((book) => {
                       return (
                           <li key={book.id }><BookListItem book={book} /></li>
                       )
                   })
               }
           </ul>
        );
    }
}

const mapStateToProps = ({books}) => {
    return {
        books
    }
}

// Функция загружает в стор данные, возвращая функцию из редакса, которая принимает 2 параметра
// Action созданный разработчиком и диспатч
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded
    }, dispatch) 
};


// В приложении начинается все с пустого массива в редакс сторе
// Как только компонент загружается, коннект оборачивает компонент BookList
// в HOC, который подключается к редакс стору.
// Коннект принимает 2 функции   чтения данных и изменения
export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
