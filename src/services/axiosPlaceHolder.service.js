import axios from "axios";
import baseURL from "../configs/urlsPlaceholder";

const axiosServicePlaceHolder = axios.create({baseURL});

export {axiosServicePlaceHolder}