<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import service from 'servicePath/index';
export default {
  data() {
    return {};
  },
  methods: {
    query() {
      return service.helloReq({ ab: [1, 2, 3] }).then(data => {
        this.name = data.name;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
