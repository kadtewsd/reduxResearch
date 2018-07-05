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
    // コンストラクタの dispatch は、connect 関数にて mapDispatchToProps の戻り値で指定している
    // IArticleAction は Action を継承していて payload と type がいる。
    // type は Action のプロパティになる。
    // dispatch をコールすることで reducer が動く。
    constructor(private dispatch: Dispatch<IArticleAction>) { }
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
store.subscribe(() => console.log('subscribe method accepts a callback that will fire whenever an action is dispatched', store.getState()));
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
// Dipatcher は React.Component<IProp, {}> の IProp のメンバー名 (この場合、articleActionDispatcher) に合わせる。
// 名前があっていないと、
// 型 '{}' を型 'IntrinsicAttributes & IntrinsicClassAttributes<Component<Pick<IFormArticleProp, "articleActionDis...' に割り当てることはできません。
// 型 '{}' を型 'Readonly<Pick<IFormArticleProp, "articleActionDispatcher">>' に割り当てることはできません。
// 型 '{}' にプロパティ 'articleActionDispatcher' がありません。
const mapDispatchToProps = (dispatch: Dispatch<IArticleAction>) => ({ articleActionDispatcher: new ArticleActionDispatcher(dispatch) });
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
