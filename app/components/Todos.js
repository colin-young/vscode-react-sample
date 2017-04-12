import React from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right';

import TodosStore from './TodosStore';

class Todos extends React.Component {
  
  constructor(props) {
      super(props);
      this.styles = {
        flex: '1 1 auto',
        margin: '3%'
      };

  }
  
  handleClick(note) {
    TodosStore.remove(note);
  }
  
  create(todo) {
    return (<ListItem 
              onMouseDown={this.handleClick.bind(null, todo)} 
              key={todo.id}
              leftIcon={<ChevronRightIcon />}
              primaryText={todo.text}
              secondaryText={todo.timestamp}>
           </ListItem>
    );
  }

  render() {
    const todos = this.props.todos.map(this.create.bind(this));
    return (
      <div style={this.styles}>
        <List>
          {todos}
        </List>
      </div>
    );
  }
}

export default Todos;
