export default function Page({ params }: { params: { slug: string } }) {
    return (
        <>
            <h1>{params.slug}</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa, recusandae quidem consectetur eum omnis voluptatibus aperiam dignissimos eos deserunt autem corporis mollitia quod ullam rerum magnam aliquam asperiores amet, a commodi atque deleniti reprehenderit delectus. Amet ipsam omnis excepturi iusto? Deleniti laboriosam doloremque nesciunt. Aliquid ex, earum esse, neque error temporibus ducimus voluptatibus cumque necessitatibus ad facilis accusamus asperiores, molestias iure eos. Temporibus nesciunt quos maxime necessitatibus explicabo minus optio, autem voluptatibus hic neque, nisi repudiandae. Autem consectetur mollitia temporibus veniam optio cumque itaque quod dicta ea, id at sunt voluptas maxime quibusdam quae quasi neque deserunt vero aspernatur.</p>
        </>
    );
}
