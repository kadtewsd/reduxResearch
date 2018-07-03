import * as React from 'react';
import './ArticleRoot.css';
import ConnectForm from './form/connectForm';
import ConnectList from './list/articleListConnector';

class ArticleRoot extends React.Component {
  public render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <ConnectList  />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2> add a new article</h2>
        </div>
        <ConnectForm />
      </div>
    );
  }
}

export default ArticleRoot;
