import {makeAutoObservable, runInAction} from "mobx";
import {TodoType} from "../view";

export class Store {
    static _instance:Store;

    static get instance () {
        if(!Store._instance) {
            Store._instance = new Store();
        }
        return Store._instance;
    }

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    list:TodoType[] = [];

    id:number = 0;

    // FIXME: makeAutoObservable 의 의미와 runInAction 의 의미를 다시 한번 비교해보면 좋을 것 같아요.
    createListItem = (data:TodoType) => {
        const list = [...this.list];
        list.push(data);
        this.changeList(list);
        runInAction(() => {
            this.id = this.id + 1;
        });
    };

    changeList = (updatedList:TodoType[]) => {
        runInAction(() => {
            this.list = updatedList;
        });
    };

    initId = (id:number) => {
        runInAction(() => {
            this.id = id + 1;
        });
    };

    completeListItem = (id:number) => {
        runInAction(() => {
            this.list = this.list.map(item => {
                if(item.id === id) item.completed = true;
                return item;
            });
        });
    };

    deleteListItem = (id:number) => {
        runInAction(() => {
            this.list = this.list.filter(item => item.id !== id);
        });
    };

}