import { ref, Ref } from 'vue';

export const cntId = (): Ref<number> => {
  const cnt = useState<number>('cntId', () => 3);
  return cnt;
};

export const addCntId = () => {
  const cnt = cntId();
  cnt.value++;
};
