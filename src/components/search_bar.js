import React , {Component} from 'react';
import ReactDOM from 'react-dom';

// const SearchBar = () => {
//     return <input />
// }

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term : ''};
    }
render() {
    return (
        <div>
            {/* <input onChange={this.onInputChange} /> */}
            {/* <input onChange={(event) =>  console.log(event.target.value)} /> */}
            <input
            value={this.state.term} 
            onChange={event =>  this.setState({term :event.target.value})} />
            Value of the input:  {this.state.term}
        </div>
    );
}

// onInputChange(event) {
// console.log(event.target.value);
// }
}
export default SearchBar;