import axiosClient  from './handleApi';

const tagApi = {
 
  getTagDetail : (params) => {
    const url = '/tag-detail';
    return axiosClient.get(url, { params });
  },

}

export default tagApi; 