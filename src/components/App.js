import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList'


class App extends React.Component {
  state = { videos: [], selectedVideo: null };

 onTextSumbit = async (text) => {
  const response = await youtube.get('/search', { 
     params: {
       q: text
     }
  });

   this.setState({ videos: response.data.items})
 };

 onVideoSelect = async (video) => {
   console.log('from the app!', video)
 }

  render() {
    return(
      <div className="ui container">
       <SearchBar onFormSumbit={this.onTextSumbit}/>
       <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
       </div>
    )
  }

}

export default App;