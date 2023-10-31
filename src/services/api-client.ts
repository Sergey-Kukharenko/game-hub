import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9c0ac971fbe045f09b649d4eb26292be'
  }
});
