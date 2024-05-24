<template>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:after, *:before {
  box-sizing: inherit;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul {
  list-style: none;
}

li {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.container{
  width: min(90%, 1200px);
  margin: 0 auto;
}

</style>
