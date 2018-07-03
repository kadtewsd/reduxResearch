export interface IFormArticleProp {
    addArticle(id: string, title: string, content: string): void;
}

export interface IFormArticleState {
    title: string;
    content: string;
}
