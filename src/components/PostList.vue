<template>
    <div>
        <div class="post-list">
            <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue'
export default {
    props:['posts'] ,
    components:{SinglePost},
    setup(props){
        onMounted(()=>{
            console.log('component mounted');
        })
        onUnmounted(()=> {
            console.log('component unmounted');
        })
        onUpdated(()=>{
            console.log('component updated');
        })
    }
}
</script>
<style>
    a {
        text-decoration: none;
    }
    a.add{
        background-color: #4fc08d;
        color: white;
        padding: 12px;
        border-radius: 4px;
    }
</style>