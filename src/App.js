import { hot } from 'react-hot-loader/root'
import React from 'react';
import ArticleList from './components/ArticleList';
import articles from './fixtures';
import UserForm from './components/UserForm';
import Select from 'react-select';

const App = () => {

    const options = articles.map(article => ({ value: article.id, label: article.title }));

    return (
        <section>
            <UserForm />
            <Select options={options} isMulti={true} closeMenuOnSelect={false} />
            <ArticleList openArticleId="56c782f18990ecf954f6e027" articles={articles} />
        </section>
    );
}

export default hot(App)