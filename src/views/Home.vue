<template>
  <div class="home">
    <div class="w-100 py-5 bg-black">
      <div class="container text-center">
        <h1 class="text-white font-weight-bold">Let's find posts!</h1>
        <p class="text-muted">Sorry about the color theme lol</p>
        <button class="btn btn-primary mr-2">Users</button>
        <button class="btn btn-secondary">Write</button>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-8 text-left">
          <h2>JSON placeholder</h2>
          <p class="text-muted">This posts come from a fake api</p>
        </div>
        <div class="col-4">
          <div class="btn-group float-right mt-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">View</button>
            <button type="button" class="btn btn-secondary">Usage</button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 pb-5 pt-1">
      <div class="container">
        <div class="row">
          <v-post v-for="post in posts" :key="post.id" :title="post.title" :userId="post.userId" :body="_.truncate(post.body)" :id="post.id.toString()"></v-post>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VPost from "@/components/VPost";
import Post from "@/api/api.service";
import _ from 'lodash';
export default {
  name: "Home",
  components: {
    VPost,
  },

  created() {
    this.findPosts();
    this._ = _;
  },

  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async findPosts() {
      try {
        this.posts = await Post.find("posts");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
