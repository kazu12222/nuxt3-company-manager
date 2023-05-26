import { ref, Ref } from 'vue';

export const loadCnt = (saveData: Ref<number>) => {
  const cnt = cntId();
  cnt.value = saveData.value;
};

export const cntId = (): Ref<number> => {
  const cnt = useState<number>('cntId', () => 3);
  return cnt;
};

export const addCntId = () => {
  const cnt = cntId();
  cnt.value++;
};
