<template>
  <div class="blog-container">
    <div class="blog-image">
      <img :src="post.image" :alt="post.title" />
    </div>
    <div class="blog-info">
      <div class="blog-tags">
        <span class="blog-tag" v-for="tag of post.tags" v-bind:key="tag">
          {{ tag }}
        </span>
      </div>
      <div class="blog-date">Published {{ formatDate(post.publishDate) }}</div>
    </div>
    <div class="blog-content">
      <h3 class="blog-title">
        <a href="#">{{ post.title }}</a>
      </h3>
      <p>{{ post.conent }}</p>
    </div>
    <div class="blog-footer">
      <div class="blog-avatar">
        <img :src="post.creator.avatar" :alt="post.creator.name" />
      </div>
      <span class="blog-name">{{ post.creator.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Post } from "src/models/post";
import { defineProps } from "vue";

// Props definition
defineProps<{ post: Post }>();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(date: string | Date): string {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
</script>

<style scoped>
.blog-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: min(100%, 384px);
  background-color: var(--white);
  border-radius: 16px;
  color: var(--black);
  border: 1px solid var(--black);
  padding: 24px;
  box-shadow: 8px 8px 0px var(--black);
}

.blog-image {
  width: 100%;
  height: 200px;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 24px;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}

.blog-info {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin-bottom: 24px;
}

.blog-date {
  font-size: 12px;
}

.blog-tags {
  margin-bottom: 16px;
}

.blog-tag {
  background-color: var(--yellow);
  padding: 8px 12px;
  border-radius: 4px;
  color: var(--black);
  font-size: 12px;
  font-weight: 800;
}

.blog-content {
  margin-bottom: 26px;
}

.blog-content p {
  color: var(--grey);
}

.blog-title {
  font-weight: 800;
  margin-bottom: 24px;
}

.blog-title a,
.blog-title a:visited {
  color: var(--black);
  text-decoration: none;
}

.blog-title a:hover {
  color: var(--yellow);
}

.blog-footer {
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
}

.blog-avatar {
  margin-right: 12px;
}

.blog-avatar img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.blog-name {
  font-weight: 800;
  font-size: 14px;
}
</style>
