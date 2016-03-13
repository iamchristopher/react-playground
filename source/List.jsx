import React from 'react';

class List extends React.Component {
    constructor () {
        super();

        this.state = {
            items: [1, 2, 3]
        };
    }

    render () {
        let items = this.state.items;

        return (
            <ol>
                {items.map((item, i) => {
                    return (
                        <li key={i}>{item}</li>
                    );
                })}
            </ol>
        );
    }
}

export default List;
