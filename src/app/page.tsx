import useIndex from "@/data/hooks/pages/useIndex.page";

export default function Home() {
  const { list } = useIndex();
  return (
    <>
      <h1>Lista de Posts</h1>
      {
        list.map((post) => {
          return <p>{post}</p>
        })
      }
    </>
  );
}
