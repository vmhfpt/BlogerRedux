import axiosClient  from './handleApi';

const categoryApi = {
  getDetail: (params) => {
    const url = '/category-detail';
    return axiosClient.get(url, { params });
  },

}

export default categoryApi; 