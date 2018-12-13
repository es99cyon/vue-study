<template>
    <div class="FilterModal">
        <button type="button" class="btn btn-default btn-sm" @click="showModal">필터</button>
        <b-modal ref="myModalRef" hide-footer title="필터">
            <h1>aaaa</h1>
            <!-- <b-checkbox-group vertical size="sm" plain inline v-model="selected" :datas="datas"></b-checkbox-group>
            <b-btn class="mt-3" variant="success" block @click="saveModal">저장</b-btn> -->
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FilterModal',
    created() {
        axios.get(`http://comento.cafe24.com/category.php`)
        .then(res => {
            this.datas = res.data.list.map(data => data)
        })
        .catch(errMsg => {
            alert(`error : 내용 ${errMsg}`);
        })
    },
    data () {
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
            orgDatas : [],
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
        saveModal() {
            // 동시에 번호를 가지고 저장을 해서 내려준다. 
            
            
            
            
            
            
            this.$refs.myModalRef.hide()
        }
    },
};
</script>