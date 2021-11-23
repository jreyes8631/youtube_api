import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'


class App extends React.Component {
  state = { videos: [] };

 onTextSumbit = async (text) => {
  const response = await youtube.get('/search', { 
     params: {
       q: text
     }
  });

   this.setState({ videos: response.data.items})
 };

  render() {
    return(
      <div className="ui container">
       <SearchBar onFormSumbit={this.onTextSumbit}/>
       i have {this.state.videos.length} videos
      </div>
    )
  }

}

export default App;