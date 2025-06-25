import {TAMBAH, KURANG} from './type';

export const tambahCounter = data => ({
  type: TAMBAH,
  data: data,
});

export const kurangCounter = data => ({
  type: KURANG,
  data: data,
});
