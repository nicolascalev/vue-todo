<template>
  <div class="col-lg-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">@{{ user }}</h6>
        <p
          class="card-text"
        >{{ body }}</p>
        <router-link class="card-link" :to="link">See more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'VPost',

    props: ['title', 'user', 'body', 'link']
}
</script>