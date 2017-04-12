import React from 'react';

import Todos from './Todos';
import NewTodo from './NewTodo';
import Search from './Search';

import TodosStore from './TodosStore';

class Viewport extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            viewport: {
                display: 'flex',
                flexDirection: 'row',
                margin: '1%'
            },
            list: {
                display: 'flex',
                flex: '2 1 auto',
                flexDirection: 'column',
                margin: '1%'
            }
        };

        this.handleSearchChanged = this.handleSearchChanged.bind(this);
        this.state = { todos: [], searchString: '' };
    }

    componentDidMount() {
        TodosStore.getAll().then((data) => {
            console.log('get all', data);

            this.setState({
                todos: this.updateTodos(data.todos, this.state.searchString)
            });
        });

        TodosStore.subscribe((action) => {
            this.setState({
                todos: this.updateTodos(action.todos, this.state.searchString)
            });
        });
    }

    updateTodos(todos, filter) {
        var filteredTodos = [];

        todos.forEach(function (element) {
            if (filter == '' || element.text.includes(filter)) {
                filteredTodos.push(element);
            }
        });
        return filteredTodos;
    }

    handleSearchChanged(value) {
        TodosStore.getAll().then((data) => {
            console.log('get all', data);

            this.setState({
                searchString: value,
                todos: this.updateTodos(data.todos, value)
            });
        });
    }

    render() {
        return (
            <div style={this.styles.viewport} >
                <NewTodo />
                <div style={this.styles.list} >
                    <Search 
                        onSearchChanged={this.handleSearchChanged} 
                    />
                    <Todos 
                        todos={this.state.todos} 
                    />
                </div>
            </div>
        );
     }
}

export default Viewport;
