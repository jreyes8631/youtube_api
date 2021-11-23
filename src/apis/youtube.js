import axios from 'axios';

const KEY = "AIzaSyBk88UFfAd4xy8f_e86ZtkbpPbG_4k8jj0";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
  }
});