import { connect, Dispatch } from 'react-redux';
import { Action } from 'redux';
import Article from '../Article';
import IArticleAction from '../ArticleAction';
import ArticleActionTypes from '../ArticleActionTypes';
import { ConnectedForm } from './ConnectedForm';
import { IFormArticleProp } from './formInterface';

export type ArticleDispatchType = IArticleAction | Action

interface IAddingArticle extends IArticleAction {
    payload: Article,
    type: ArticleActionTypes.ADD_ARTICLE,
}

export class ActionDispatcher {
    constructor(private dispatch: (action: IArticleAction) => void) { }
    public add(article: Article) {
        this.dispatch(addArticle(article));
    }
}

const addArticle = (article: Article): IAddingArticle => ({
    payload: article,
    type: ArticleActionTypes.ADD_ARTICLE,
})

const mapFormState = (form: IFormArticleProp) => form;
const mapDispatchToProps = (dispatch: Dispatch<IArticleAction>) => ({ actions: new ActionDispatcher(dispatch) })
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         addArticle: (article: Article): void => dispatch(addArticle),
//     };
// };

const ConnectForm = connect(
    mapFormState,
    mapDispatchToProps
)(ConnectedForm);

export default ConnectForm;
