import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'


class App extends React.Component {
 onTextSumbit = (text) => {
   youtube.get('/search', { 
     params: {
       q: text
     }
   });
 };

  render() {
    return(
      <div className="ui container">
       <SearchBar onFormSumbit={this.onTextSumbit}/>
      </div>
    )
  }

}

export default App;