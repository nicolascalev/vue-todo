<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">@{{ userId }}</h6>
      <p class="card-text">{{ body }}</p>
      <a class="text-primary" data-toggle="modal" data-target="#exampleModal" @click="clickSelectPost">See more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "VPost",

  props: ["title", "userId", "body", "id"],

  methods: {
    clickSelectPost() {
      this.$emit('selected', this.id)
    }
  }
};
</script>