import { getClient } from '@/services/api/axiosInstance';
import { ILevelApi } from '@/services/api/levels/levelsApi.type';

export const levelsApi = {
  async getLevels() {
    const response = await getClient().get<Array<ILevelApi>>('/levels');
    return response.data;
  },
  async updateLevel(data: ILevelApi) {
    const response = await getClient().put(`/levels/${data.id}`, data);
    return response.data;
  },
};
