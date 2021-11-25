import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList'


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
       <VideoList />
       </div>
    )
  }

}

export default App;