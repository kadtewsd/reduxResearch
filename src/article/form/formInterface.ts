import { ArticleActionDispatcher } from "./connectForm";

export interface IFormArticleProp {
    articleActionDispatcher: ArticleActionDispatcher,
}

export interface IFormArticleState {
    title: string;
    content: string;
}
