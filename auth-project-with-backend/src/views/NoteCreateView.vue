<template>
    <div class="container col-12 col-md-6 col-lg-4 my-5">
      <button class="btn btn-primary mx-auto d-block my-5" @click="logout">Log Out</button>
      <form>
        <div class="form-group">
          <label for="note">Nota</label>
          <input type="text" class="form-control" id="note" placeholder="Ingresa el contenido de la nota" v-model="content">
        </div>
        <button type="submit" class="btn btn-primary mt-2" @click.prevent="createNote">Create Note</button>
      </form>

      <button class="btn btn-primary mx-auto d-block my-5" @click="router.push({ name: 'noteList' })">All Notes</button>
    </div>
  </template>
  
  <script lang="ts" setup>

  import  useAuth  from '@/store/auth';
  import { ref, Ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const store = useAuth();
  const content: Ref<string> = ref('');


    const createNote = async (): Promise<void> => {
        const response = await store.createNote(content.value);
        if (response) {
          alert(store.message);
          content.value = '';
          router.push({ name: 'noteList' });
        }
        else if (response === false) {
          alert(store.message);
        }
    }
  const logout = (): void => {
    store.logout();
    router.push({ name: 'login' });
};
  </script>
  