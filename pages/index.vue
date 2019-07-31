<template>
  <Example />
</template>

<script>
import Example from '~/components/structure/Example.vue'

export default {
  components: {
    Example
  }
}
</script>

<style lang="scss" scoped>
.component {
  /* style */
  @include mq {
    /* style */
  }
}
</style>
