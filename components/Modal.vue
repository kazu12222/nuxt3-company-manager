<template>
  <div
    v-if="showModal"
    class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!-- Modal content -->
    <div
      class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <h3
          class="text-lg leading-6 font-medium text-gray-900"
          id="modal-title"
        >
          {{ localCard.company.name }}
        </h3>
        <div class="mt-2">
          <!-- 会社情報 -->
          <h4>会社情報</h4>
          <p>
            会社名:
            <input
              type="text"
              v-model="localCard.company.name"
              @input="updateCard"
            />
          </p>
          <p>
            業種:
            <input
              type="text"
              v-model="localCard.company.industry"
              @input="updateCard"
            />
          </p>
          <p>
            特徴:
            <input
              type="text"
              v-model="localCard.company.feature"
              @input="updateCard"
            />
          </p>
          <p>
            社長:
            <input
              type="text"
              v-model="localCard.company.president"
              @input="updateCard"
            />
          </p>
          <p>
            メモ:
            <textarea
              v-model="localCard.company.memo"
              @input="updateCard"
            ></textarea>
          </p>

          <!-- タスク -->
          <h4>タスク</h4>
          <div v-for="(task, index) in localCard.tasks" :key="index">
            <p>
              締切:
              <input type="date" v-model="task.deadline" @input="updateCard" />
            </p>
            <p>
              内容:
              <textarea v-model="task.content" @input="updateCard"></textarea>
            </p>
            <p>
              State:
              <select v-model="task.state" @change="updateCard">
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
            </p>
          </div>

          <!-- クライアント情報 -->
          <h4>クライアント情報</h4>
          <p>
            GitHubリンク:
            <input
              type="text"
              v-model="localCard.client.githubLink"
              @input="updateCard"
            />
          </p>
          <p>
            売上:
            <input
              type="number"
              v-model="localCard.client.earn"
              @input="updateCard"
            />
          </p>
          <p>
            作成費:
            <input
              type="number"
              v-model="localCard.client.cost"
              @input="updateCard"
            />
          </p>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          class="mt-3 w-100 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          @click="$emit('close-modal')"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, withDefaults, defineProps, defineEmits } from 'vue';
import { CompanyInfo } from '~/types/types';

const props = withDefaults(
  defineProps<{
    card: CompanyInfo;
    showModal: boolean;
  }>(),
  {
    card: () => ({
      company: {
        companyId: 0,
        name: '',
        industry: '',
        feature: '',
        president: '',
        memo: '',
        state: 'candidate',
      },
      tasks: [
        {
          deadline: new Date(),
          content: 'aaa',
          state: 'todo',
        },
      ],
      client: {
        githubLink: '',
        earn: 0,
        cost: 0,
      },
    }),
    showModal: true,
  }
);

const emit = defineEmits(['update:card']);

const localCard = ref<CompanyInfo>({ ...props.card });

const updateCard = () => {
  emit('update:card', localCard.value);
};
</script>
