import {defineStore} from "pinia";

const useAuth = defineStore("auth", {
    state: () => {
        return {
            token: null,
        };
    },
    actions: {
        async register(name: string, email: string, password: string) {
            return 0;
        },
        async login(email: string, password: string) {
            return 0;
        },
        async getNotes() {
           return 0; 
        },
        async createNotes() {
            return 0;
        },
    },
});

export default useAuth;