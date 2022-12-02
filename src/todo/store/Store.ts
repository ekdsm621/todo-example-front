import {makeAutoObservable} from "mobx";
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

    id:number = 1;

    createListItem = (data:TodoType) => {
        const list = [...this.list];
        list.push(data);
        this.changeList(list);
        this.id = this.id + 1;
    };

    changeList = (updatedList:TodoType[]) => {
        this.list = updatedList;
    };

    initId = (id:number) => {
        this.id = id + 1;
    };

    completeListItem = (id:number) => {
        this.list = this.list.map(item => {
            if(item.id === id) item.completed = true;
            return item;
        });
    };

    deleteListItem = (id:number) => {
        this.list = this.list.filter(item => item.id !== id);
    };

}