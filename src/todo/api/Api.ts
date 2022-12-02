import axios from "axios";
import {TodoType} from "../view";

// FIXME: server의 host는 고정적이 않을 가능성이 큽니다. front server 실행 시점에 정의할 수 있도록 바꿔보세요.
// FIXME: Api 를 class 그리고 singleton으로 처리한 이유는 무엇인가요?
// FIXME: typescript를 사용하는 만큼 각 함수에 Type hint는 적극적으로 작성하는 것이 좋습니다.
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

    // FIXME: 함수명이 complete 이지만 body에는 update 말고는 별도의 처리가 없습니다. 오히려 함수 밖에서 complete에 대한 로직이 구현되어 있습니다. 네이밍이 좀더 명확하면 좋을 것 같아요.
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