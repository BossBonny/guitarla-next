import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import Post from "@/components/post"
import Curso from "@/components/curso"
import styles from "../styles/grid.module.css"


export default function Home({guitarras, posts, curso}) {

  return (
    <>
      <Layout 
        title={'Inicio'}
        description={'Blog de música, venta de guitarras y más'}
      >
        <main className="contenedor">
          <h1 className="heading"> Nuestra Colección </h1>
          
          <div className={styles.grid}>
                {guitarras.map(guitarra => (
                <Guitarra
                    key={guitarra.id}
                    guitarra={guitarra}
                />
            ))}
          </div>
        </main>

        <Curso
          curso={curso}
        />

        <section>
          <h2 className="heading"> Blog</h2>
          <div className={styles.grid}>
                    {posts?.map(post => (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>
        </section>

      </Layout>
    </>

  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras`

  const urlPosts = `${process.env.API_URL}/posts`

  const urlCurso = `${process.env.API_URL}/curso`

  console.log("Hey 1º");

  const [resGuitarras,resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])

  console.log("Hey 2º");

  const [guitarras, posts, curso] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])

  console.log("Hey 3º");
  

  return({
    props: {
      guitarras,
      posts,
      curso
    }
  })

}