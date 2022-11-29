<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
    <h1>{{ userInfo.userName }}</h1>
  </div>
</template>

<script>
  import service from 'servicePath/index';
  import { mapState, mapGetters, mapActions } from 'vuex';

  const { appAsk } = service;
  export default {
    name: 'Login',
    components: {},
    props: {},
    data() {
      return {};
    },
    computed: {
      ...mapState('app', ['userInfo']),
      // ...mapGetters('app', ['formatUserInfo']),
    },
    watch: {},
    created() {
      const params = {
        userName: 'aux2611',
        passwd: '123',
      };
      this.setUserLogin(params);
    },
    mounted() {},
    methods: {
      ...mapActions('app', ['setUserLogin']),
    },
  };
</script>

<style lang="scss" scoped>
</style>
