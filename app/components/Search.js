import React from 'react';
import TextField from 'material-ui/TextField';

const RETURN_KEY_CODE = 13;

class Viewport extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            flex: '1 1 auto',
            margin: '3%'
        };
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
            let text = event.target.value.trim();

            this.props.onSearchChanged(text);
        }
    }

    render() {
        return (
            <div style={this.styles} >
                <TextField 
                    onKeyDown={this.onKeyDown} 
                    hintText="Filter list"
                    fullWidth={true}
                    value={this.props.searchString}
                />
            </div>
        );
     }
}

export default Viewport;
