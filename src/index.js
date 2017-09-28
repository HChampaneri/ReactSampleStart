import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDOrQfO8reNVSe2pVFD3v-w78X53Ft_ge4';
// const App = function() {
    
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>);
}

ReactDOM.render(<App/>,document.querySelector('.container'));