import { ref } from "vue";

class AuthService {
  private jwt;

  constructor() {
    this.jwt = ref();
  }

  get getJwt() {
    return this.jwt;
  }

  async login(username: string, password: string) {
    try {
      const url = "https://dummyjson.com/auth/login";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });

      const data = await response.json();

      if (data.token) {
        this.jwt.value = data.token;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default AuthService;
