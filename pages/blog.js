import Layout from "@/components/layout"
import Post from "@/components/post"


export default function Blog({posts}) {
    return (
        <Layout 
        title={'Blog'}
        description="Blog de música, tienda de guitarras, GuitarLA, tienda de música, consejos">

            <main className="contenedor">
                <h1 className="heading">Blog</h1>
                <div>
                    {posts?.map(post => (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    )
}


export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/posts`)
    const posts = await respuesta.json()
    return {
        props:{
            posts
        }
    }
}