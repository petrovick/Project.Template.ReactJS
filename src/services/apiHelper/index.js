import api from '../api';
import apiNode from '../apiNode';

export default async function apiHelper(apiType, url, type, body) {
  if (apiType === 'apiNode') {
    if (type === 'POST') {
      const { data } = await apiNode.post(url, body);
      return data;
    }

    const { data } = await apiNode.get(url);
    return data;
  }

  if (type === 'POST') {
    const { data } = await api.post(url, body);
    return data;
  }
  if (type === 'DELETE') {
    const { data } = await api.delete(url);
    return data;
  }
  const { data } = await api.get(url);

  return data;
}
