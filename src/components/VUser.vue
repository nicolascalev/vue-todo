<template>
  <div class="card">
    <img :src="avatar" class="card-img-top w-100" alt="..." />
    <div class="card-body">
      <p class="card-text">{{ name }}</p>
      <p class="card-text text-muted">{{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VUser',

  props: ['avatar', 'name', 'email']
}
</script>