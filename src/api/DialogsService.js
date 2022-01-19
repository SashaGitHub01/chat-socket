import { instance } from './instance';

export class DialogsService {
   static getAll = async () => {
      const res = await instance.get('/api/dialogs/');

      return res.data.data
   }

   static getOne = async (id) => {
      const res = await instance.get(`/api/dialogs/${id}`);

      return res.data.data
   }
}