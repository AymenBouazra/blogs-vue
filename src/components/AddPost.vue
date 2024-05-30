<template>
    <div class="add-post">
        <h1>Add post</h1>
        <label for="title">Title:</label>
        <input type="text" v-model="title">
        <label for="title">Body:</label>
        <textarea type="text" v-model="body"></textarea>
        <label for="title">Tags: <button class="tag" @click="addTag">Add tag</button></label>
        <div v-for="(tag, index) in tags" :key="tag" >
            <span>{{ index + 1 }} </span><input type="text" @change="handleChange($event,index)" >
        </div>
        <button @click="handleSubmit" class="submit">Submit</button>
    </div>
</template>
<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import addPost from '@/composables/addPost';
export default {
    setup(){
        const title = ref('')
        const body = ref('')
        const tags = ref([])
        const error = ref(null)
        const router = useRouter()
        console.log(router);
        const addTag = () => {
            tags.value.push('')
        }
        const handleChange = (e,index) => {
            tags.value[index] = e.target.value
        }
        const handleSubmit = () => {
            if (!title.value || !body.value || tags.value.filter((tag)=> tag === '').length > 0 ) {
                alert('Fill all the fields!')
                return
            }
            const { err } = addPost({title:title.value, body:body.value, tags: tags.value})
            if (err) {
                error.value = err
            return
            }
            router.push('/')
            
        }
        return {title, body, tags, error, handleSubmit, handleChange, addTag}
    }
}
</script>
<style>
    .add-post{
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin:40px auto;
        gap: 20px;
    }
    input, textarea {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #ddd;
        color: #555;
        border-radius: 4px;
    }
    button.tag{
        background-color: #2346ba;
        color: white;
        padding: 10px;
        border-radius: 4px;
        border: 0;
    }
    button.submit {
        background-color: #4fc08d;
        color: white;
        padding: 12px;
        border-radius: 4px;
        border: 0;
        text-transform: uppercase;
    }
</style>