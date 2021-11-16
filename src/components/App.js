import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component {
 onTextSumbit = (text) => {

 };

  render() {
    return(
      <div className="ui container">
       <SearchBar onTextSumbit={this.onTextSumbit}/>
      </div>
    )
  }

}

export default App;