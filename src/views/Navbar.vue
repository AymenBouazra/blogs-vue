<template>
    <nav>
        <ul>
            <li><router-link :to="{ name: 'home'}">Posts</router-link></li> |
            <li><router-link :to="{ name: 'AddPost'}">Add Post</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>
    ul{
        list-style-type: none;
        display: flex;
    }
    li{
        margin: 0 10px;
    }
</style>