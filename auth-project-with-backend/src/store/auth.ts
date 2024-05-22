import { defineStore } from "pinia";

const useAuth = defineStore("auth", {
  state: () => {
    return {
      token: null,
      baseUrl: "http://127.0.0.1:8000/api",
      message: "",
    };
  },
  actions: {
    async register(name: string, email: string, password: string) {
      const uri = `${this.baseUrl}/auth/register`;
      
      try {
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

        if (response.status === false) {
          this.message = response.message;
          return false;
        } else {
          this.token = response.token;
          this.message = response.message;
          return true;
        }
      } catch (error) {
        this.message = "Error inesperado";
        return false;
      }
    },
    async login(email: string, password: string) {
      const uri = `${this.baseUrl}/auth/login`;

      try {
        
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

      if (response.status === false) {
        this.message = response.message;
        return false;
      } else {
        this.token = response.token;
        this.message = response.message;
        return true;
      }
      } catch (error) {
        this.message = "Error inesperado";
        return false;
      }
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
    logout() {
      this.token = null;
    },
  },
});

export default useAuth;
