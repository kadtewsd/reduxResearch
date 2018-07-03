import { connect } from 'react-redux';
import { IKasakaidReducerState } from '../../store/store';
import { IArticleState } from '../ArticleReducer';
import { ListComponent } from "./listComponent";

// この形だと、articles が undefined になる。
// const mapStateToProp: (state: IArticleState) => { articles: Article[] } = (state: IArticleState) => ({ articles: state.articles });
// この形だと ListComponent に reducerTwo.articles になる。
// const mapStateToProp:(state: IArticleState) => Article[] = (state: IArticleState) => (state.articles);
// const mapStateToProp:(state: IArticleState) => IArticleState = (state: IArticleState) => (state);
// tslint:disable:no-console
const mapStateToPropFail = (state: IArticleState) => ({ articles: state.articles });
console.log('fail mapStateToProp', mapStateToPropFail);
const mapStateToProp = (state: IKasakaidReducerState) => ({ articles: state.news.articles });
const ConnectList = connect(mapStateToProp)(ListComponent)
export default ConnectList;