import axios from "axios";

export const getData = (params = {}) => {
  console.log(params.page);
  return axios.get(`http://localhost:8080/cities`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
};
export const PostData = (data = { name: "", population: "", country: "" }) => {
  return axios({
    method: "POST",
    url: `http://localhost:8080/cities`,
    data: data
  });
};

export const DeleteData = (id) => {
  return axios({
    method: "DELETE",
    url: `http://localhost:8080/cities/${id}`
  });
};
