import {urls} from "../configs/urlsPlaceholder";
import {axiosServicePlaceHolder} from "./axiosPlaceHolder.service";

export const userService = {
    getAll: () => axiosServicePlaceHolder.get(urls.users).then(value => value.data)
}