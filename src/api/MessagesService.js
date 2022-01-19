import { instance } from './instance';

export class MessagesService {
   static create = async ({ content, id }) => {
      const res = await instance.post(`/api/messages/${id}`, { content });

      return res.data.data
   }

   static delete = async (id) => {
      const res = await instance.delete(`/api/messages/${id}`);

      return res.data.data
   }
}