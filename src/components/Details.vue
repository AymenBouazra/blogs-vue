<template>
    <div class="post" v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
        <span class="pre" v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>
    </div>
    <div v-else>{{ error }}</div>
</template>
<script>
import getPost from '@/composables/getPost';

export default {
    props:['id'],
    setup(props){
        const {post, error, load} = getPost(props.id)
        load()
        return { post,error }
    }
}

</script>
<style>
    .post {
        max-width: 1200px;
        margin: 0 auto;
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
</style>