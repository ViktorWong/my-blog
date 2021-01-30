/*
Author: Viktor (victor318x@gmail.com)
layouts.service.ts (c) 2021
Desc: description
Created:  1/30/2021, 1:06:31 PM
Modified: 1/30/2021, 2:19:56 PM
*/

import { GET } from '@utils/request';

import { AxiosResponse } from 'axios';

import { IPlayer, IGlobalStatus } from '../types/layout';

class LayoutsService {
  public getGlobalStatus(): Promise<AxiosResponse<IGlobalStatus>> {
    return GET(`/globalStatus`, null, '');
  }

  public getPlayers(): Promise<AxiosResponse<IPlayer[]>> {
    return GET(`/litePlayers`, null, '');
  }
}

const layoutsService = new LayoutsService();

export default layoutsService;
