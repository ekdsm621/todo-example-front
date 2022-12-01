import axios from "axios";
import {TodoType} from "../view";

class Api {
    static _instance:Api;

    static get instance() {
        if(! Api._instance){
            Api._instance = new Api();
        }
        return Api._instance;
    }

    async create(item:TodoType) {
        await axios({
            url: 'http://localhost:8080/api/item',
            method:'post',
            data: item,
        });
    }

    async getList () {
        return axios.get('http://localhost:8080/api/list');
    }

    async complete(item:TodoType) {
        await axios({
            url: 'http://localhost:8080/api/item',
            method:'put',
            data: item,
        });
    }

    async delete(id:number) {
        await axios({
            url: 'http://localhost:8080/api/item',
            method:'delete',
            data: {id: id},
        });
    }
}

export default Api;