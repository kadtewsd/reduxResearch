import { connect, Dispatch } from 'react-redux';
import { Action } from 'redux';
import store from '../../store/store';
import Article from '../Article';
import IArticleAction from '../ArticleAction';
import ArticleActionTypes from '../ArticleActionTypes';
import { ConnectedForm } from './ConnectedForm';

export type ArticleDispatchType = IArticleAction | Action

interface IAddingArticle extends IArticleAction {
    payload: Article,
    type: ArticleActionTypes.ADD_ARTICLE,
}

export class ArticleActionDispatcher {
    constructor(private dispatch: (action: IArticleAction) => void) { }
    /**
     * 記事を追加します。
     * Article を生成して、最終的に、articleAditioner = Reducer への ADD を実行して、記事を追加します。 
     * @param id 
     * @param title 
     * @param content 
     */
    public add(id: string, title: string, content: string) {
        this.dispatch(articleAdditoner(new Article(id, title, content)));
    }
}
// tslint:disable:no-console
store.subscribe(() => console.log('subscribe method accepts a callback that will fire whenever an action is dispatched'));
/**
 * Reducer に ADD_ARTICLE の dispatch をして、store に記事を追加します。 
 * @param article 
 */
const articleAdditoner = (article: Article): IAddingArticle => ({
    payload: article,
    type: ArticleActionTypes.ADD_ARTICLE,
})

console.log('before dispatch');
store.dispatch(articleAdditoner(new Article("2", 'added by store dispatch!!!', "createStore を store という名前でインポートして Article を dispatch しました！")));
console.log('after dispatch');

// const mapStateToProps = (prop: IFormArticleProp) => prop;
const mapDispatchToProps = (dispatch: Dispatch<IArticleAction>) => ({ addArticle: new ArticleActionDispatcher(dispatch) });
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         addArticle: (article: Article): void => dispatch(addArticle),
//     };
// };

const ConnectForm = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default ConnectForm;
