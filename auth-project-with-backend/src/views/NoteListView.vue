<template>
    <div class="container my-5">

        <button class="btn btn-primary mx-auto d-block" @click="logout">Log Out</button>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>

import  useAuth from '@/store/auth';
import { useRouter } from 'vue-router';

const store = useAuth();
const router = useRouter();


const logout = (): void  => {
    store.logout();
    router.push({ name: 'login' });
};

</script>