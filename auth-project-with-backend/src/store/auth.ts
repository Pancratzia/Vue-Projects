import { defineStore } from "pinia";

const useAuth = defineStore("auth", {
  state: () => {
    return {
      token: null,
      baseUrl: "http://127.0.0.1:8000/api",
    };
  },
  actions: {
    async register(name: string, email: string, password: string) {
      const uri = `${this.baseUrl}/register`;

      const rawResponse = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const response = await rawResponse.json();

      // TODO: Manage response
    },
    async login(email: string, password: string) {
      const uri = `${this.baseUrl}/login`;

      const rawResponse = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const response = await rawResponse.json();

      // TODO: Manage response
    },
    async getNotes() {
      const uri = `${this.baseUrl}/note`;

      const rawResponse = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });

      const response = await rawResponse.json();

      // TODO: Manage response
    },
    async createNotes(content: string) {
      const uri = `${this.baseUrl}/note`;

      const rawResponse = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify({
          content: content,
        }),
      });

      const response = await rawResponse.json();

      // TODO: Manage response
    },
  },
});

export default useAuth;
