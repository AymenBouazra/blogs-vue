<template>
    <div class="post">
        <router-link :to="{name:'Details',params:{id:post.id}}">
            <h3>{{ post.title }}</h3>
        </router-link>
        <p>{{ snippet }}</p>
        <span class="pre" v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
    </div>
</template>
<script>
import { computed } from 'vue';

export default {
    props:['post'],
    setup(props){
        const snippet = computed(()=> {
            return props.post.body.substring(0, 100) + '...';
        })
        return {snippet}
    } 
}
</script>
<style>
    .post {
        max-width: 1200px;
        margin: 0 auto;
    }
   
    .post a {
        text-decoration: none;
        color: tomato;
        text-transform: uppercase; 
        font-size: 28px;
    }
    .post p {
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
    }
    .pre{
        white-space: pre-wrap;
        color: #444;
        background-color: #eee;
        padding: 10px;
        border-radius: 4px;
        margin: 0 5px;
    }
    .pre:hover {
        background-color: #ccc;
        cursor: pointer;
    }
</style>