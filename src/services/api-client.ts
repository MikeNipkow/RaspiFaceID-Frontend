import axios from "axios";

export const config = {
    apiBaseUrl: "http://127.0.0.1:8080",
    videoUrl: "http://127.0.0.1:8090/live.mjpg"
}

export default axios.create({
    baseURL: config.apiBaseUrl
});