<template>
  <main class="main-container">
    <BlogItem :post="post" />
  </main>
</template>

<script lang="ts" setup>
import BlogItem from "./components/BlogItem.vue";
import { Post } from "./models/post";

const post: Post = {
  image: "/assets/images/illustration-article.svg",
  title: "HTML & CSS foundations",
  conent:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  creator: {
    avatar: "/assets/images/image-avatar.webp",
    name: "Greg Hooper",
  },
  tags: ["Learning"],
  publishDate: "2003-12-21",
};
</script>

<style>
:root {
  --yellow: hsl(47, 88%, 63%);
  --white: hsl(0, 0%, 100%);
  --grey: hsl(0, 0%, 50%);
  --black: hsl(0, 0%, 7%);
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

body {
  font-family: "Figtree", sans-serif;
  font-size: 16px;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--yellow);
  color: var(--black);
}

#app {
  width: 100%;
  height: 100%;
}

.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 24px;
}
</style>
