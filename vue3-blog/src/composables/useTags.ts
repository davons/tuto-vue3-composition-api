import { ref } from "vue";
import type { IPost } from "./usePosts";

export const useTags = (posts: IPost[]) => {

  const tags = ref<string[]>([])

  const tagSet = new Set<string>()

  posts.forEach((item) =>{
     item.tags.forEach((tag) => tagSet.add(tag))
  })

  tags.value = [...tagSet]

  return {
    tags
  }
}
