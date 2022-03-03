import React from 'react';
import ReactDOM from 'react-dom'

class Main extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>Fire Emblem Heroes</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Weapon</th>
                            <th>Game</th>
                        </tr>
                        {

                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
const root = document.querySelector('#root');
ReactDOM.render(<Main />, root);