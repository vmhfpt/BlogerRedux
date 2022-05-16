import axiosClient  from './handleApi';

const sideBarApi = {
  getAll: (params) => {
    const url = '/category';
    return axiosClient.get(url, { params });
  },

 /* get: (slug) => {
    const url = `/products/${slug}`;
    return axiosClient.get(url);
  },*/
}

export default sideBarApi; 