import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    /* Провайдер для доступа к стору, затема обработчик ошибок,
    потом Провайдер контекста, который прокидывает значение из 
    сервиса по всему приложению, следующим идет роутер для навигации,
    последним идем главный компонент App
    */
    <Provider store={store}>                                        
        <ErrorBoundary>                                       
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);