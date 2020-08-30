<template>
  <div class="home">
    <div class="w-100 py-5 bg-light">
      <div class="container text-center">
        <h1 class="font-weight-bold">Creative authors</h1>
        <p class="text-muted">Sorry about the color theme lol</p>
        <router-link class="btn btn-primary mr-2" to="/">Home</router-link>
        <router-link class="btn btn-dark" to="/about">About</router-link>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="card bg-light mb-3">
            <div class="card-body text-center">
              <p class="card-text">Create a json server in less than a minute.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="card bg-light mb-3">
            <div class="card-body text-center">
              <p class="card-text">Costumize bootstrap with Sass.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="card bg-light mb-3">
            <div class="card-body text-center">
              <p class="card-text">Search content with regular expressions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 pb-5 pt-1">
      <div class="container">
        <div class="row pb-4">
          <div class="col-12">
            <input type="text" class="form-control" placeholder="Filtrar" @input="filterUsers" v-model="filter" />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3" v-for="user in filterResult" :key="user.id">
            <v-user :name="user.name" :email="user.email" :avatar="user.avatar"></v-user>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '@/api/api.service'
import VUser from '@/components/VUser'
import _ from 'lodash'
import { image } from 'faker'

export default {
  name: "Users",

  components: { VUser },

  data() {
    return {
      users: [],
      filterResult: [],
      filter: "",
    }
  },

  created() {
    this.findUsers()
    this._ = _;
  },

  methods: {
    async findUsers() {
      var users = await User.find('users');
      _.map(users, user => {
        user.avatar = image.avatar()
      })
      this.users = users;
      this.filterResult = this.users;
    },

    filterUsers() {
      var regex = new RegExp(this.filter, 'i');
      var filtered = _.map(this.users, (user) => {
        if (regex.test(user.name)) return user;
      });
      this.filterResult = _.filter(filtered, (user) => user != undefined);
    }
  }
};
</script>