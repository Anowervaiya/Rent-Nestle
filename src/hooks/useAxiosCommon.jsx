import axios from 'axios'

export const axiosCommon = axios.create({
  baseURL: 'http://localhost:8000',
});
const useAxiosCommon = () => {
  return axiosCommon
}

export default useAxiosCommon
