import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ArticleComponent from './article/ArticleRoot'
// import Counter from './container/Container';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store'

ReactDOM.render(
  // Provider 経由で Container (export default である connect 関数) に
  // store 
  <Provider store={store}>
    {/* <Counter /> */}
    <ArticleComponent />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
