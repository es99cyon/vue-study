<template>
  <!-- 컨테이너 -->
  <div class="main">
    <!-- 필터 및 정렬 -->
    <div class="row">
      <div class="col-lg-10">
        <FilterModal></FilterModal>
      </div>
      <div class="col-lg-2 pull-right sel-sort">
        <span v-on:click="sortDirection = 'asc'" v-bind:class="{ active: sortDirection === 'asc' }">오름차순</span> / <span v-on:click="sortDirection = 'desc'" v-bind:class="{ active: sortDirection === 'desc' }">내림차순</span>
      </div>
    </div>
    <!-- /필터 및 정렬 -->

    <!-- 컨텐츠 -->
    <div class="row">
      <div v-for="(data, index) in orderBy(filterDatas)" :key="index" class="col-lg-12">
        <b-card-group deck>
          <b-card no-body class="mg-15">
            <b-card-header>
              <h4>{{data.title}} <small class="float-sm-right">{{data.no}}</small></h4>
            </b-card-header>    
            <b-card-body>
              <div class="이메일/작성일" style="padding-bottom: 15px;">
                <span>{{data.email}}</span> |
                <span>{{data.updated_at}}</span>
              </div>
              <div class="내용">
                {{data.contents}}
              </div>
            </b-card-body>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <!-- /컨텐츠 -->
  </div>
  <!-- /컨테이너 -->
</template>

<script>
import axios from 'axios'
import FilterModal from '@/components/FilterModal.vue'

export default {
  name: 'category',
  components: {
    FilterModal
  },
  data () {
    return {
      /**
       * 원본데이터 목록
       * @type { Array }
       */
      orgDatas: [],
      /**
       * 데이터 목록
       * @type { Array }
       */
      datas: [],
      /**
       * 오름/내림 차순
       * @type { String }
       */
      sortDirection: 'asc',
      /**
       * 필터링 대상 목
       * @type { Array }
       */
      fCtgrys: ['1', '2', '3']
    }
  },
  created () {
    axios
      .get(`http://comento.cafe24.com/request.php?page=1&ord=${this.sortDirection}`)
      .then(res => {
        this.orgDatas = res.data.list
        this.datas = this.orgDatas.map(data => data)
      })
      .catch(errMsg => {
        alert(`error : 내용 ${errMsg}`);
      });
  },
  methods: {
    /**
     * 오름/내림 차순으로 정렬한 목록을 반환한다.
     * @param { Array } items 정렬대상 목록
     * @return { Array } 오름/내림 차순으로 정렬한 목록
     */
    orderBy: function (items) {
      // 항목의 값이 없거나 배열타입이 아니라면...
      if (!Array.isArray(items) || items.length === 0) {
        return
      }

      // 오름/내림 차순으로 정렬하여 반환한다.
      if (this.sortDirection === 'asc') {
        return items.sort((a, b) => a.no - b.no)
      } else if (this.sortDirection === 'desc') {
        return items.sort((a, b) => b.no - a.no)
      } else {
        return items
      }
    },
  },
  /**
   * TODO computed의미를 파악하여 정확한 주석 작성할것
   */
  computed: {
    filterDatas: function () {
      let that = this
      return this.orgDatas.filter(data => {
        return that.fCtgrys.includes(data.no)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  /******************************
  ****상단 필터 및 정렬 영역******
  ******************************/
  .mg-15 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  div.row>div.sel-sort>span {
    cursor: pointer;
  }

  div.row>div.sel-sort>span.active {
    color: red;
    font-weight: bold;
  }
</style>
