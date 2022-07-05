<template>
    <div class="img-item">
        <img :src="imgUrl" v-img-lazy-loading/>
    </div>
</template>
<script>
import {reactive} from "vue"
export default {
    name : "imageItemCom",
    props:['imgSrc'],
    setup(props){
        let imgUrl = reactive(props.imgSrc)
        return {imgUrl}
    }
}
// "
</script>