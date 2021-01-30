/*
Author: Viktor (victor318x@gmail.com)
layoutsStore.ts (c) 2021
Desc: description
Created:  1/30/2021, 12:55:32 PM
Modified: 2021/1/30 下午8:48:16
*/

import {
    observable,
    runInAction
  } from 'mobx';

  import {
    layoutsService
  } from '@apis/index.service';

  import {
    IGlobalStatus,
  } from '@/types/layout';

  import {
    setToast
  } from '@utils/utils';

  class LayoutsStore {
    @observable public globalStatus: IGlobalStatus = {
      full_site_gray: false,
      __v: 0,
      _id: '',
    };
  
    public getGlobalStatus = async () => {
      try {
        const res = await layoutsService.getGlobalStatus();
        runInAction(() => {
          this.globalStatus = res.data;
        });
      } catch (e) {
        setToast('获取全局状态失败');
      }
    };
  }

  const layoutsStore = new LayoutsStore();
  
  export default layoutsStore;

