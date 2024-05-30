import { ref } from "vue"

const addPost = async (data) => {
    const error = ref(null)
    try {
        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw Error('Error in adding post')
        }
        alert('Post added successfully')
    } catch (err) {
        error.value = err.message
    }
    return { error }
}
export default addPost