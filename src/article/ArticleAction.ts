import {Action} from 'redux';
import Article from './Article'
import ArticleActionTypes from './ArticleActionTypes'

export interface IStateRoot {
    articles: Article[], 
}
interface IArticleAction extends Action {
    type: ArticleActionTypes;
    payload: Article;
}

export default IArticleAction;