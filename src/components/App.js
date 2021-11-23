import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component {
 onTextSumbit = (text) => {
   console.log(text);
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