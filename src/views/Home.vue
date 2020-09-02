<template>
  <div class="home">
    <div class="w-100 py-5 bg-light">
      <div class="container text-center">
        <h1 class="font-weight-bold">Let's find posts!</h1>
        <p class="text-muted">Sorry about the color theme lol</p>
        <router-link class="btn btn-primary mr-2" to="/users">Users</router-link>
        <button class="btn btn-dark">Write</button>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-sm-12 col-lg-8 text-left">
          <h2>JSON placeholder</h2>
          <p class="text-muted">This posts come from a fake api</p>
        </div>
        <div class="col-sm-12 col-lg-4">
          <div class="btn-group float-lg-right mt-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">View</button>
            <button type="button" class="btn btn-dark">Axios</button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 pb-5 pt-1">
      <div class="container">
        <div class="row pb-4">
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              placeholder="Filtrar"
              @input="filterPosts"
              v-model="filter"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-3" v-for="post in filterResult" :key="post.id">
            <v-post
              :title="post.title"
              :userId="post.userId"
              :body="_.truncate(post.body)"
              :id="post.id.toString()"
              @selected="selectPost"
            ></v-post>
          </div>
        </div>
      </div>
    </div>

    <v-modal :title="selected.title">
      <p class="text-primary font-weight-bold">Author</p>
      <p>
        {{ selected.user.name }}
        <span class="text-muted">@{{ selected.user.username }}</span>
      </p>
      <p>{{ selected.user.email }}</p>
      <hr class="mb-5" />
      <p>{{ selected.body }}</p>
      <hr class="mt-5" />
      <p class="text-primary font-weight-bold">
        Comments
        <span class="badge badge-primary">{{ selected.comments.length }}</span>
      </p>
      <div v-for="com in selected.comments" :key="com.id">
        <p>{{ com.body }}</p>
        <p class="text-muted">{{ com.email }}</p>
        <hr>
      </div>
      // TODO: add comment input
    </v-modal>
  </div>
</template>

<script>
import VPost from "@/components/VPost";
import VModal from "@/components/VModal";
import Post from "@/api/api.service";
import _ from "lodash";
export default {
  name: "Home",
  components: {
    VPost,
    VModal,
  },

  created() {
    this.findPosts();
    this._ = _;
  },

  data() {
    return {
      posts: [],
      filterResult: [],
      filter: "",
      selected: {
        user: {},
        comments: [],
      },
    };
  },

  methods: {
    async findPosts() {
      try {
        this.posts = await Post.find("posts");
        this.filterResult = this.posts;
      } catch (err) {
        console.log(err);
      }
    },

    filterPosts() {
      var regex = new RegExp(this.filter, "i");
      var filtered = _.map(this.posts, (post) => {
        if (regex.test(post.title)) return post;
      });
      this.filterResult = _.filter(filtered, (post) => post != undefined);
    },

    async selectPost(idPost) {
      var select = this.posts.find((post) => post.id == idPost);
      var user = await Post.findOne("users", select.userId);
      var comments = await Post.findPopulate(
        "post",
        select.userId,
        "comments"
      );
      select.user = user;
      select.comments = comments;
      this.selected = select;
    },
  },
};
</script>
