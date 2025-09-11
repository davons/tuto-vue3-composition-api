import { ref } from "vue"

export interface IPost{
  id: string,
  title: string,
  body: string,
  tags: string[]
}
export const usePosts = () => {
  const posts = ref<IPost[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getPosts = async() => {
    loading.value = true
    error.value = null

    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 2000)
      })

      const response = await fetch('http://localhost:3000/posts')
      if (!response.ok) {
        throw new Error(`HTTP error status : ${response.status}`)
      }
      posts.value = await response.json()
    }catch(e: any) {
      error.value = e.message || 'Unknown error occured'
    } finally {
      loading.value = false
    }
  }

  return {
    posts,
    loading,
    error,
    getPosts
  }
}
