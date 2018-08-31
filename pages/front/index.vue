<template>
  <div class="front">
      <Row>
        <i-col span="24">
          <Button type="primary" style="float: right;margin-right: 20px;margin-top: 5px;" @click="gotoHome">控制台</Button>
        </i-col>
      </Row>
      <div style="width: 100%;display: block;">
          <MapChart></MapChart>
      </div>
  </div>
</template>
<script>
import './front.less'
import MapChart from './components/mapChart/mapChart'

export default {
  name: 'Front',
  components: {
    MapChart
  },
  data () {
    return {
      inforCardData: [
        { title: '平均热度', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '总热度值', icon: 'md-locate', count: 23432, color: '#19be6b' },
        { title: '最低热度', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '最高热度', icon: 'md-share', count: 1657, color: '#ed3f14' }
      ]
    }
  },
  computed: {
  },
  methods: {
    gotoHome () {
      this.$router.push({
        name: 'home'
      })
    }
  },
  mounted () {
  }
}
</script>
<style>
  .count-style{
    font-size: 50px;
    color: #F0F0F0;
  }
  .infor-title{
    font-size: 16px;
    color: #F8F8F9;
  }
</style>
