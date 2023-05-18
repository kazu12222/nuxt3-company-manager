<template>
  <h4>クライアント情報</h4>
  <p>
    GitHubリンク:
    <input type="text" v-model="client.githubLink" @input="updateCard" />
  </p>
  <p>
    売上:
    <input type="number" v-model="client.earn" @input="updateCard" />
  </p>
  <p>
    作成費:
    <input type="number" v-model="client.cost" @input="updateCard" />
  </p>
</template>
<script setup lang="ts">
import { ref, withDefaults, defineProps, defineEmits } from 'vue';
import { Client } from '~/types/types';

const props = withDefaults(
  defineProps<{
    card: Client;
  }>(),
  {
    card: () => ({
      githubLink: '',
      earn: 0,
      cost: 0,
    }),
  }
);

const emit = defineEmits(['update:client']);

const client = ref<Client>({ ...props.card });

const updateCard = () => {
  emit('update:client', client.value);
};
</script>
