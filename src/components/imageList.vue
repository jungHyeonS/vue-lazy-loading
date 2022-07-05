<template>
    <div class="image-list" v-for="i in 100" :key="i">
        <imageItem :imgSrc="'https://i.picsum.photos/id/640/200/300.jpg?hmac=wFv1Wyd-STy0zsr2E2USifr--6VcaWg6pOhzelisMIg'"></imageItem>
    </div>
</template>
<script>
import imageItem from "./imageItem.vue"
export default {
    name : "imageListCom",
    components:{
        imageItem
    },
    setup() {
        
    },
}
</script>

