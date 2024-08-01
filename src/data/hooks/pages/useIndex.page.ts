import { BlogPost } from "@/data/@types/BlogPostInterface";

export default function useIndex() {
    const posts: BlogPost[] = [];
    return { posts };
}
