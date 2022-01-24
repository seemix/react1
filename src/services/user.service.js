import {urls} from "../config/Urls";
import {axiosService} from "./axios.service";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data)
}