import { BlogPost } from "@/data/@types/BlogPostInterface";

export default function useIndex() {
    const posts: BlogPost[] = [];
    let list = ['5 tips for use Github', 'How install VSCode', 'How to create a NextJS app'];
    return { list };
}
