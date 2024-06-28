import { createApp } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';


const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});

const cache = new InMemoryCache();

const app = createApp(App);

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});


app.mount('#app')
