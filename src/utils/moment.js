import moment from 'moment';
import 'moment/locale/ru'

export const timeAgo = (date) => {
   moment.locale('ru')

   moment.updateLocale('ru', {
      relativeTime: {
         hh: '%d ч.',
         mm: '%d мин.',
         s: 'сейчас'
      }
   })

   const res = moment(date).fromNow(true);

   return res;
}

export const timeHours = (date) => {
   const res = moment(date).format('HH:mm');

   return res;
}

export const dayAndMonth = (date) => {
   moment.locale('ru')

   const res = moment(date).format('DD MMMM');

   return res;
}

