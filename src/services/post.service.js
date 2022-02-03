import {urls} from "../configs/urlsPlaceholder";
import {axiosServicePlaceHolder} from "./axiosPlaceHolder.service";

export const postService = {
    getAll: () => axiosServicePlaceHolder.get(urls.posts).then(value => value.data)
}