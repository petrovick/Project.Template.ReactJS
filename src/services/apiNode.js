import axios from 'axios';
import store from '../store';

const apiNode = axios.create({
  baseURL: 'http://brcomcontrolaw-dev.us-east-2.elasticbeanstalk.com',
});

apiNode.interceptors.request.use(config => {
  const { token } = store.getState().auth;
  const headers = { ...config.headers };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

export default apiNode;
