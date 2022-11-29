<template>
  <div>
    <Siderbar isShow />
    <div class="sub-content">
      右侧子内容
    </div>
  </div>

</template>


<script>
  import Siderbar from './Siderbar.vue';

  export default {
    name: 'GroupeManage',
    components: {
      Siderbar,
    },
    props: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {},
  };
</script>

<style lang="scss" scoped>
</style>
