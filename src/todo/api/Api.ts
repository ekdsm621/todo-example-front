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

    async create(data:TodoType) {
        await axios.post('http://localhost:8000/todo',data);
    }

    async getList () {
        return axios.get('http://localhost:8000/todo?_sort=id&_order=asc');
    }

    async complete(id:number) {
        const data = { completed: true }
        await axios.put('http://localhost:8000/todo/'+id, data);
    }

    async delete(id:number) {
        await axios.delete('http://localhost:8000/todo/'+id);
    }
}

export default Api;