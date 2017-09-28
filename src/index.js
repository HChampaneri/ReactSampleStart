import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDOrQfO8reNVSe2pVFD3v-w78X53Ft_ge4';

// const App = function() {
    
YTSearch({key:API_KEY, term:'surfboards'},function(data){
    console.log(data);
})
class App extends Component {
    render() {
    return (
    <div>
        <SearchBar />
    </div>);
    }
}

ReactDOM.render(<App/>,document.querySelector('.container'));