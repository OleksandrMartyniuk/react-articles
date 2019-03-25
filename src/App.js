import { hot } from 'react-hot-loader/root'
import React from 'react';
import ArticleList from './components/ArticleList';
import articles from './fixtures';
import UserForm from './components/UserForm';

const App = () => {
    return (
        <section>
            <UserForm />
            <ArticleList articles={articles} />
        </section>
    );
}

export default hot(App)