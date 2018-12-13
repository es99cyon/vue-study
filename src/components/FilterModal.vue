<template>
  <div>
    <b-button @click="showModal">Filter Modal</b-button>
    <b-modal ref="myModalRef" hide-footer title="회원가입">
        <b-card class="d-block text-center">
            지금 가입하면 꿈구던 기업에 재직 중인 현직자와 익명으로 대화 할 수 있습니다.
        </b-card>
        <b-checkbox-group vertical size="sm" plain inline v-model="selected" :datas="datas"></b-checkbox-group>
        <b-btn class="mt-3" variant="success" block @click="hideModal">저장</b-btn>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: `FilterModal`,
    created() {
        axios.get(`http://comento.cafe24.com/category.php`)
        .then(res => {
            console.log(res);
            this.datas = res.data.list.map(data => data)
        })
        .catch(errMsg => {
            alert(`error : 내용 ${errMsg}`);
        })
    },
    data () {
        return {
            selected: [],
            /**
             * data 목록
             * 
             * @type { Array }
             */
            datas : []
        }
    },
    methods: {
        showModal() {
            this.$refs.myModalRef.show()
        },
        hideModal() {
            // 동시에 번호를 가지고 저장을 해서 내려준다. 
            
            
            
            
            
            
            this.$refs.myModalRef.hide()
        }
    }
};
</script>