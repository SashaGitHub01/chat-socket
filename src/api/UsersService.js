import { instance } from './instance';

export class UsersService {
   static auth = async () => {
      const res = await instance.get('/api/users/auth');

      return res.data.data
   }

   static reg = async (body) => {
      const res = await instance.post('/api/users/registration', body);

      return res.data.data
   }

   static login = async (body) => {
      const res = await instance.post('/api/users/login', body);

      return res.data.data
   }

   static logout = async () => {
      const res = await instance.get('/api/users/logout');

      return res.data.data
   }

   static getAll = async () => {
      const res = await instance.get('/api/users/');

      return res.data.data
   }

   static getOne = async (id) => {
      const res = await instance.get(`/api/users/${id}`);

      return res.data.data
   }
}