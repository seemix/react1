import {urls} from "../configs/urlsPlaceholder";
import {axiosServicePlaceHolder} from "./axiosPlaceHolder.service";

export const commentService = {
    getAll: () => axiosServicePlaceHolder.get(urls.comments).then(value => value.data)
}