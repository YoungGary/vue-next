import axios from "axios";
import { inject } from "vue";

axios.defaults.baseURL = "http://localhost:3000"

const http = axios.create();

http.interceptors.request.use(
    function (config) {
        return config
    },
    function (err){
        return Promise.reject(err);
    }
);
http.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (err){
        return Promise.reject(err);
    }
);

const axiosName = Symbol();

export function useAxios(){
    return inject(axiosName)
}
export function useRequest(url,data = {},type="GET"){
    const http = useAxios();
    return http({
        url,
        data,method:type
    })
}
export function axiosInstall(Vue){
    Vue.provide(axiosName,http)
}
