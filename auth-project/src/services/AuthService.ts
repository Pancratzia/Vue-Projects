import { ref, Ref } from "vue";
import { inject } from "vue";
import { VueCookies } from "vue-cookies";

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
    let returnSatus = false;
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
          expiresInMins: 60*24, // 24 hours
        }),
      });

      const data = await response.json();

      if ("message" in data && !("token" in data)) {
        this.error.value = "Login failed";
      } else if ("token" in data) {
        const $cookies = inject<VueCookies>('$cookies'); 
        this.error.value = "";
        this.jwt.value = data.token;
        $cookies?.set('auth', data.token);
        returnSatus = true;
      }
    } catch (error) {
      this.error.value = "Could not connect to server";
    }

    return returnSatus;
  }
}

export default AuthService;
