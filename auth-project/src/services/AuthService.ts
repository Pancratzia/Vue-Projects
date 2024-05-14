import { ref } from "vue";

class AuthService {
  private jwt;
  private error;

  constructor() {
    this.jwt = ref("");
    this.error = ref("");
  }

  get getJwt() {
    return this.jwt;
  }

  get getError() {
    return this.error;
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
          password: password,
        }),
      });

      const data = await response.json();

      if ("message" in data && !("token" in data)) {
        this.error.value = "Login failed";
        return false;
      }

      if ("token" in data) {
        this.jwt.value = data.token;
        return true;
      }

    } catch (error) {
      console.log(error);
    }
  }
}

export default AuthService;
