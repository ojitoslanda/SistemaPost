import axios from "axios";

export default function AunthUser(){
    const http = axios.create({
        baseURL: "http://localhost:8000/api",
        headers:{
            "Content-type" : "application/json"
        }
    });

    return{
        http
    }
}