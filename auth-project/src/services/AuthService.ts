import { ref, Ref } from "vue";

class AuthService {
  private jwt: Ref<string>;
  private error: Ref<string>;

  constructor() {
    this.jwt = ref("");
    this.error = ref("");
  }

  get getJwt(): Ref<string> {
    return this.jwt;
  }

  get getError(): Ref<string> {
    return this.error;
  }

  async login(username: string, password: string): Promise<boolean> {
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

      this.jwt.value = data.token;
      return true;

    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default AuthService;
