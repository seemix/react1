import {axiosService} from "./axios.service";
import {urls} from "../configs/Urls";

export const commentService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data),
    getByPostId: (id) => axiosService.get(`${urls.comments}?postId=${id}`).then(value => value.data)
}
