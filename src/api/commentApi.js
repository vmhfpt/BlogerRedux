import axiosClient  from './handleApi';

const commentApi = {
  getComment: (params) => {
    const url = '/get-comment';
    return axiosClient.post(url, { params });
  },
  postComment: (params) => {
    const url = '/post-comment';
    return axiosClient.post(url, { params });
  },
}

export default commentApi; 







//https://ak47016599.000webhostapp.com/