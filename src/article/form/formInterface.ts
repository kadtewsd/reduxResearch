import { ArticleActionDispatcher } from "./connectForm";

export interface IFormArticleProp {
    // addArticle(id: string, title: string, content: string): void;
    addArticle: ArticleActionDispatcher,
}

export interface IFormArticleState {
    title: string;
    content: string;
}
