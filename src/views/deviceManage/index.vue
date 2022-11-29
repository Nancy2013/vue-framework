<template>
  <div>
    <a-directory-tree :loadData="onLoadData"
                      :treeData="treeData">
      <span slot="title"
            slot-scope="{title,num}">{{ `${title}${num}` }}</span>
      <a-icon slot="smile"
              type="smile-o" />
    </a-directory-tree>
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
        treeData: [
          {
            title: 'Expand to load',
            key: '0',
            num: 1,
            scopedSlots: { title: 'title' },
            slots: {
              icon: 'smile',
            },
            children: [
              {
                title: 'Expand to load',
                key: '3',
                num: 1,
                scopedSlots: { title: 'title' },
                slots: {
                  icon: 'smile',
                },
              },
              {
                title: 'Expand to load',
                key: '4',
                num: 1,
                scopedSlots: { title: 'title' },
                slots: {
                  icon: 'smile',
                },
              },
            ],
          },
          { title: 'Expand to load', key: '1' },
          { title: 'Tree Node', key: '2', isLeaf: true },
        ],
      };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
      onLoadData(treeNode) {
        return new Promise(resolve => {
          if (treeNode.dataRef.children) {
            resolve();
            return;
          }
          setTimeout(() => {
            treeNode.dataRef.children = [
              { title: 'Child Node', key: `${treeNode.eventKey}-0`, scopedSlots: { title: 'title' } },
              { title: 'Child Node', key: `${treeNode.eventKey}-1`, scopedSlots: { title: 'title' } },
            ];
            this.treeData = [...this.treeData];
            resolve();
          }, 1000);
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
