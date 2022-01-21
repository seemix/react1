
import {urls} from "../configs/Urls";
import {axiosService} from "./axios.service";

export const postService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    getByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
}