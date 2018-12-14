<template>
  <div>
    <b-button @click="showModal" variant="primary">SignUp Modal</b-button>
    <b-modal ref="myModalRef" hide-footer title="회원가입">
      <b-card class="d-block text-center mg-rl-0">지금 가입하면 꿈구던 기업에 재직 중인 현직자와 <span style="color: red;">익명</span>으로 대화 할 수 있습니다.</b-card>
      <b-btn-group vertical size="sm" class="width-100">
        <b-btn class="mt-3 facebook-style">페이스북 계정으로 회원가입</b-btn>
        <b-btn class="mt-3 google-style">구글 계정으로 회원가입</b-btn>
        <b-btn class="mt-3 naver-style">네이버 계정으로 회원가입</b-btn>
      </b-btn-group>
      <b-btn class="mt-3" variant="light" block @click="hideModal">나중에 하기</b-btn>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "SignUpModal",
  methods: {
    /**
     * 모달을 오픈한다.
     */
    showModal() {
      this.$refs.myModalRef.show();
    },
    /**
     * 모달을 닫는순간 상세페이지로 이동한다.
     * @todo 상세페이지 이동 vuex 또는 router 공부하자.
     */
    hideModal() {
      this.$refs.myModalRef.hide();
    }
  }
};
</script>

<style scoped>
  /******************************
    ****모달 컨텐츠 영역******
    ******************************/

  .width-100 {
    width: 100%;
  }

  .mg-rl-0 {
    margin-right: 0px;
    margin-left: 0px;
  }

  .facebook-style {
    background-color:#3b5998;
    border-color:#3b5998
  }

  .google-style {
    background-color:#ea4335;
    border-color:#ea4335
  }

  .naver-style {
    background-color:#00bd39;
    border-color:#00bd39
  }
</style>
