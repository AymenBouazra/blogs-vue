<template>
    <div class="home">
        <h1>Home</h1>
        <!-- <p ref="p">My name is {{  name  }} and my age is {{ age }}</p>
        <button @click="handleClick">Click</button>
        <button @click="age++">age + 1</button>
        <input type="text" v-model="name"> -->

        <!-- <h2>Refs</h2>  
        <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
        <button @click="updateNinjaOne">Update ninja one</button>

        <h2>Reactive</h2>
        <p>{{ ninjaTwo.name }} - {{  ninjaTwo.age }}</p>
        <button @click="updateNinjaTwo">Update ninja two</button> -->
        <!-- <input type="text" v-model="search">
        <p>Search term: {{ search }}</p>
        <div v-for="name in matchingNames" :key="name">{{ name }}</div>
        <button @click="handleClick">stop watching</button> -->

        <!-- <PostList v-if="showPosts" :posts="posts" />
        <button @click="showPosts = !showPosts">Toggle Posts</button>
        <button @click="posts.pop()">Delete post</button> -->
          <div v-if="error">{{ error }}</div>
          <div v-if="posts.length">
            <PostList :posts="posts" />
          </div>
          <div v-else> Loading ...</div>

    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { onMounted, ref } from 'vue';

// import { computed, ref, watch, watchEffect } from 'vue';

// import { ref, reactive } from 'vue';
import getPosts from '../composables/getPosts'

export default {
  name: 'HomeView',
  components:{PostList},
  setup(){
    const { posts, error, load} = getPosts()
    load()
    return {
      posts,
      error
      // showPosts
    }
  }
  // setup(){
  //   const search = ref('')
  //   const names = ref(['mario','yoshi','luigi','toad','bowser','koopa','peach'])
  //   const stopWatch = watch(search,()=>{
  //     console.log('search changed')
  //   })
  //   const stopEffect = watchEffect(()=>{
  //     console.log('watchEffect',search.value)
  //   })
  //   const matchingNames = computed(()=>{
  //     return names.value.filter((item)=> item.includes(search.value) )
  //   })

  //   const handleClick = ()=> {
  //     stopWatch()
  //     stopEffect()
  //   }

  //   return {names,search,matchingNames, handleClick}
  // }
  // setup(){
  //   const ninjaOne = ref({name:'mario',age:30})
  //   const ninjaTwo = reactive({name:'luigi', age:35})
  //   const updateNinjaOne =()=> {
  //     ninjaOne.value.name = 'Aymen'
  //   }
  //   const updateNinjaTwo =()=> {
  //     ninjaTwo.age = 40
  //   }
  //   // setup(){
  //   //   const p = ref(null)
  //   //   const name = ref('mario')
  //   //   const age = ref(30)
  
  //   //   const handleClick = () => {
  //   //     name.value = 'Aymen'
  //   //   }
  //   //   return {
  //   //     name, age , handleClick
  //   //   }
  //   // }
  //   return {ninjaOne,ninjaTwo, updateNinjaOne, updateNinjaTwo}
  // }
}
</script>
