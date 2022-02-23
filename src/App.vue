<template>
  <div class="home">
    <h1>Home</h1>
    <Store />
    <button @click="showPosts =!showPosts">toggle posts</button>
    <PostList v-if="showPosts" :posts="posts" />
    <Products />
  </div>
</template>

<script>
import Products from './components/Products.vue'
import PostList from './components/PostList.vue'
import Store from './components/Store.vue'
import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    Products,
    PostList,
    Store
  },
  setup(){
    const posts = ref([
      { id: 1, title: 'Hello World', body: 'Welcome to the blog' },
      { id: 2, title: 'Second Post', body: 'This is my second post' },
      { id: 3, title: 'Third Post', body: 'This is my third post' }
    ])
    const showPosts = ref(false)
    return {posts, showPosts}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
