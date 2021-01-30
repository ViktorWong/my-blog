/*
Author: Viktor (victor318x@gmail.com)
homeStore.ts (c) 2021
Desc: description
Created:  2021/1/30 下午8:48:14
Modified: 2021/1/30 下午8:50:10
*/
import {
    observable
  } from 'mobx';
  
class HomeStore {
    @observable public name: string = '';
}

const homeStore = new HomeStore()

export default homeStore