import { hot } from 'react-hot-loader/root'
import React from 'react';
import ArticleList from './components/ArticleList';
import articles from './fixtures';

const App = () => <ArticleList articles={articles}/>
export default hot(App)