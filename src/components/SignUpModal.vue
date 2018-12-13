<template>
  <div>
    <b-button @click="showModal">SignUp Modal</b-button>
    <b-modal ref="myModalRef" hide-footer title="회원가입">
        <b-card class="d-block text-center">
            지금 가입하면 꿈구던 기업에 재직 중인 현직자와 익명으로 대화 할 수 있습니다.
        </b-card>
        <b-btn-group vertical size="sm">
            <b-btn>페이스북 계정으로 회원가입</b-btn>
            <b-btn>구글 계정으로 회원가입</b-btn>
            <b-btn>네이버 계정으로 회원가입</b-btn>
        </b-btn-group>
        <b-btn class="mt-3" variant="light" block @click="hideModal">나중에 하기</b-btn>
    </b-modal>
  </div>
</template>

<script>
export default {
    name: `SignUpModal`,
    methods: {
        showModal() {
            this.$refs.myModalRef.show()
        },
        hideModal() {
            this.$refs.myModalRef.hide()
        }
    }
};
</script>