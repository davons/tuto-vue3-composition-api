import { ref } from "vue"
import type { IPost } from "./usePosts"

export const usePost = (id: string) => {
  const post = ref<IPost | null>(null)
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getPost = async() => {
    loading.value = true
    error.value = null
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 2000)
      })
      const response = await fetch(`http://localhost:3000/posts/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
      }
      post.value = await response.json()

    }catch(e: any) {
      error.value = e.message || 'Unknown error'
    }finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    post,
    getPost
  }
}
