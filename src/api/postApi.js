import axiosClient  from './handleApi';

const postApi = {
  getAll: (params) => {
    const url = '/post';
    return axiosClient.get(url, { params });
  },
  getMoreHome: (params) => {
    const url = '/post-more';
    return axiosClient.get(url, { params });
  },
  getPostDetail : (params) => {
    const url = '/post-detail';
    return axiosClient.get(url, { params });
  },

}

export default postApi; 