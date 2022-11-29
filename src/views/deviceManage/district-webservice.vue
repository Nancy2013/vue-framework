<template>
  <div>

  </div>
</template>

<script>
  // import { mapGetters, mapMutations } from 'vuex';
  import $ from 'jquery';

  export default {
    name: 'DeviceManage',
    components: {},
    props: {},
    data() {
      return {
        imgUrl: '',
      };
    },
    computed: {},
    watch: {},
    created() {
      this.getDistrictList();
    },
    mounted() {},
    methods: {
      getDistrictList() {
        // 方法三：ajax
        this.getWebService('/list', null);
      },
      getChildren() {
        this.getWebService('/getchildren', { id: '110000' });
      },
      async getWebService(api, params) {
        const data = {
          ...params,
          output: 'jsonp',
          key: '2DGBZ-ZAHR6-WSOSH-MHEYM-GHFZF-BEFIR',
        };
        const url = `https://apis.map.qq.com/ws/district/v1${api}`;
        let serviceData = [];
        await $.ajax({
          type: 'get',
          dataType: 'jsonp',
          data,
          jsonp: false,
          jsonpCallback: 'QQmap',
          url,
          success: json => {
            //业务处理
            console.log(json.result[0]);
            const { status, result = [] } = json;
            serviceData = result[0];
          },
          error: err => {
            //业务处理
          },
        });
        return serviceData;
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
