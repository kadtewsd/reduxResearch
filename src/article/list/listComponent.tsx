import * as React from 'react';
// import { IArticleState } from '../../store/store';
import Article from '../Article';

// export const ListComponent = (state: IArticleState) => (
//     <ul className='list-group list-group-flush' >
//         {state.articles.map(e1 => (
//             <li className='list-group-item' key={e1.id}>
//                 {e1.title}
//             </li>
//         ))}
//     </ul>
// );
interface IProps {
    articles: Article[];
}
export class ListComponent extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }
    public render() {
        return (
            <ul className='list-group list-group-flush' >
                {this.props.articles.map(e1 => (
                    <li className='list-group-item' key={e1.id}>
                        <h2>{e1.title}</h2>
                        <div>{e1.content}</div>
                        <div>id: {e1.id}</div>
                    </li>
                ))}
            </ul>
        )
    }
};