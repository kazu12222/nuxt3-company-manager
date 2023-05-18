<template>
  <h4>会社情報</h4>
  <p>
    会社名:
    <input type="text" v-model="company.name" @input="updateCard" />
  </p>
  <p>
    業種:
    <input type="text" v-model="company.industry" @input="updateCard" />
  </p>
  <p>
    特徴:
    <input type="text" v-model="company.feature" @input="updateCard" />
  </p>
  <p>
    社長:
    <input type="text" v-model="company.president" @input="updateCard" />
  </p>
  <p>
    メモ:
    <textarea v-model="company.memo" @input="updateCard"></textarea>
  </p>
</template>
<script setup lang="ts">
import { ref, withDefaults, defineProps, defineEmits } from 'vue';
import { Company } from '~/types/types';

const props = withDefaults(
  defineProps<{
    card: Company;
  }>(),
  {
    card: () => ({
      companyId: 0,
      name: '',
      industry: '',
      feature: '',
      president: '',
      memo: '',
      state: 'candidate',
    }),
  }
);

const emit = defineEmits(['update:company']);

const company = ref<Company>({ ...props.card });

const updateCard = () => {
  emit('update:company', company.value);
};
</script>
