import axios from "axios";
import {TodoType} from "../view";

// FIXME: Api 를 class 그리고 singleton으로 처리한 이유는 무엇인가요?
class Api {
    static _instance:Api;

    static get instance() {
        if(! Api._instance){
            Api._instance = new Api();
        }
        return Api._instance;
    }

    private axios;

    constructor() {
        const base = import.meta.env.VITE_BACK_BASE_URL + '/todo';
        this.axios = axios.create({
            baseURL: base,
        });
    };

    async create(item:TodoType):Promise<void> {
        await this.axios({
            url: '/item',
            method:'post',
            data: item,
        });
    }

    async getList ():Promise<TodoType[]> {
        return this.axios.get('/list').then(res => res.data);
    }

    async update(item:TodoType):Promise<void> {
        await this.axios({
            url: '/item',
            method:'put',
            data: item,
        });
    }

    async delete(item:TodoType):Promise<void> {
        await this.axios({
            url: '/item',
            method:'delete',
            data: item,
        });
    }
}

export default Api;