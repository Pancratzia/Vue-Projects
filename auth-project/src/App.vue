<template>

  <div class="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'auth' }">Login</router-link>
    <router-link :to="{ name: 'firebase' }">Firebase Login</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: #2c3e50;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;

    &.router-link-exact-active {
      color: #42b983;
    }

  }
}
</style>
