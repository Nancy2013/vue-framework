<template>
  <div class="console-common-container">
    <Topbar />
    <div class="console-common-content">
      <router-view />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import _ from 'lodash';
  import Topbar from './Topbar.vue';

  export default {
    name: 'Main',
    components: {
      Topbar,
    },
    data() {
      return {};
    },
    computed: {},
    created() {},
    mounted() {},
    beforeMount() {},
    methods: {},
  };
</script>
