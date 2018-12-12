<template>

<!-- 컨테이너 -->
<div class="ss">
  <!-- 필터 및 정렬 -->
  <div class="row">
    <div class="col-lg-10">
      <button type="button" class="btn btn-default btn-sm">필터</button>
    </div>
    <div class="col-lg-2 pull-right sel-sort">
      <span v-on:click="sortDirection = 'asc'" v-bind:class="{ active: sortDirection === 'asc' }">오름차순</span> / <span v-on:click="sortDirection = 'desc'" v-bind:class="{ active: sortDirection === 'desc' }">내림차순</span>
    </div>
  </div><!-- /필터 및 정렬 -->

  <!-- 컨텐츠 -->
  <div class="row">
    <div v-for="(data, index) in orderByAndCtgryFilter(datas, fCtgryTextNo)" :key="index" class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <span>{{data.title}}</span>
          <span class="pull-right">{{data.no}}</span>
        </div>
        <div class="panel-body">
          <div class="이메일/작성일" style="padding-bottom: 15px;">
            <span>{{data.email}}</span>|
            <span>{{data.updated_at}}</span>
          </div>

          <div class="내용">
            {{data.contents}}
          </div>
        </div>
      </div>
    </div>
  </div><!-- /컨텐츠 -->
</div><!-- /컨테이너 -->

</template>

<script>

import axios from 'axios'

export default {
  name: 'category',
  data () {
    return {
      datas: [],
      sortDirection: '',
      fCtgryTextNo: '1'
    }
  },
  created () {
    axios
      .get('http://comento.cafe24.com/request.php?page=1&ord=asc&category=1')
      .then(res => {
        this.datas = res.data.list.map(data => data)
      })
  },
  methods: {
    /**
     * 필터링 및 오름/내림 차순으로 정렬한 목록을 반환한다.
     * @param { Array } items 필터링 및 오름/내림 차순으로 정렬할 목록
     * @param { String } ctgryTextNo 필터링 할 카테고리 번호
     * @return { Array } 필터링 및 오름/내림 차순으로 정렬한 목록
     * @todo filter등록하는 방법을 학습해서 분리하자!!!
     */
    orderByAndCtgryFilter: function (items, ctgryTextNo) {
      // 값이 없거나 배열타입이 아니라면...
      if (!Array.isArray(items) || items.length === 0) {
        return
      }

      // 필터에서 선택된 카테고리목록을 필터링한다.
      if (ctgryTextNo !== '') {
        items = items.filter(data => data.category_no === ctgryTextNo)
      }

      // 오름/내림 차순으로 정렬하여 반환한다.
      if (this.sortDirection === 'asc') {
        return items.sort((a, b) => a.user_no - b.user_no)
      } else if (this.sortDirection === 'desc') {
        return items.sort((a, b) => b.user_no - a.user_no)
      } else {
        return items
      }
    }
  }
}

</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="less" scoped>
div.row>div.sel-sort>span {
  cursor: pointer;
}
div.row>div.sel-sort>span.active {
  color: red;
  font-weight: bold;
}
</style>
