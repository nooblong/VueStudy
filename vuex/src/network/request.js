import axios from "axios";

export function request(config){
    // return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: "http://123.207.32.32:8000"
        })
    //
    //     instance(config)
    //         .then(res => {
    //             // console.log(res);
    //             resolve(res);
    //         })
    //         .catch(err => {
    //             // console.log(err);
    //             reject(err);
    //         })
    // })
    return instance(config);
}