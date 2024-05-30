import { ref } from 'vue'

const useTags = (posts) => {
    const tags = ref([])
    const tagSet = new Set()
    if (posts) {
        posts.forEach(post => {
            post.tags.forEach(tag => {
                return tagSet.add(tag)
            })
        })
        tags.value = [...tagSet]
    }
    return { tags }
}

export default useTags