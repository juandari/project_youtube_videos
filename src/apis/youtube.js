import axios from 'axios';

const KEY = 'AIzaSyCPlxKcrNCifFHWLPbWOlZ-cFxKL_xMD94';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
    type: 'video'
  }
});