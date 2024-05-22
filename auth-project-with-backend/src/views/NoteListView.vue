<template>
    <div class="container my-5">

        <button class="btn btn-primary mx-auto d-block my-5" @click="logout">Log Out</button>
        <table class="table" v-if="notes.length > 0">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Note</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="note in notes" :key="note.id">
                    <th scope="row">{{ note.id }}</th>
                    <td>{{ note.content }}</td>
                </tr>
            </tbody>
        </table>

        <p v-else class="text-center">No notes yet. 
        </p>

        <router-link :to="{ name: 'createNote' }">Create Note</router-link>
    </div>
</template>

<script lang="ts" setup>

import useAuth from '@/store/auth';
import { useRouter } from 'vue-router';
import { ref, Ref } from 'vue';
import INote from '@/interfaces/INote';


let notes: Ref<Array<INote>> = ref([]);

const store = useAuth();
const router = useRouter();

const getNotes = async (): Promise<void> => {
    const response = await store.getNotes();
    if (response) {
        notes.value = response;
    }
};

getNotes();

const logout = (): void => {
    store.logout();
    router.push({ name: 'login' });
};

</script>