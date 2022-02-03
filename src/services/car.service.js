import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    createCar: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`),
    patchCar: (car) => axiosService.patch(`${urls.cars}/${car.id}`, car).then(value => value.data),

}