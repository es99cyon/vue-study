<template>
  <div class="FilterModal">
    <button type="button" class="btn btn-default btn-sm" @click="showModal">필터</button>
    <b-modal ref="myModalRef" hide-footer title="필터">
      <div class="checkbox" v-for="(data, index) in datas" :key="index" >
        <input type="checkbox" v-bind:value="data.name" v-on:input="data.no = $event.target.value" v-on:change="watchCheckBox($event)">
        <label>{{ data.name }}</label>
      </div>
      <b-btn class="mt-3" variant="success" block @click="saveModal">저장</b-btn>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FilterModal",
  created() {
    /**
     * 비동기 통신으로 카테고리 목록을 받아온다.
     *
     * @throw errMsg 에러메시지 내용
     */
    axios
      .get(`http://comento.cafe24.com/category.php`)
      .then(res => {
        this.datas = res.data.list.map(data => data);
      })
      .catch(errMsg => {
        alert(`error : 내용 ${errMsg}`);
      });
  },
  data() {
    return {
      /**
       * 선택된 목록
       *
       * @type { Array }
       */
      selected: [],
      /**
       * 원본 data 목록
       *
       * @type { Array }
       */
      orgDatas: [],
      /**
       * data 목록
       *
       * @type { Array }
       */
      datas: []
    };
  },
  methods: {
    /**
     * 모달창을 오픈한다.
     */
    showModal() {
      this.$refs.myModalRef.show();
    },
    /**
     * TODO 구현
     * 모달 내용을 저장한다.
     */
    saveModal() {
      // 동시에 번호를 가지고 저장을 해서 내려준다.

      console.log(this.selected)
      this.selected
      this.$refs.myModalRef.hide();
    },
    /**
     * TODO 구현
     * 체크박스 선택된내용을 메인페이지로 전달해준다.
     */
    watchCheckBox(event) {

    }
  }
};
</script>

<style lang="less" scoped>
.checkbox {
  width: 30%;
  display: inline-block;
}
</style>
