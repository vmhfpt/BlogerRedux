import axiosClient  from './handleApi';

const headerApi = {
  getAll: (params) => {
    const url = '/get-footer';
    return axiosClient.get(url, { params });
  },
 getDetail : (params) => {
  const url = '/detail-footer';
  return axiosClient.get(url, { params });
 },


}

export default headerApi; 