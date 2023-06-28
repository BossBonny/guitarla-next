import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../../styles/blog.module.css"
import { formatearFecha } from "@/utils/helpers"

export default function Post({post}) {

    const {titulo, contenido, imagen, published_at} = post[0]
    return (
        <Layout
            title={titulo}
        >
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={`http://192.168.1.251:1337${imagen.formats.medium.url}`} width={1000} height={400} alt={`Imagen blog ${titulo}`}/>

                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </Layout>
    )
}

export async function getServerSideProps({query: {url}}){

    const respuesta = await fetch(`${process.env.API_URL}/posts?url=${url}`)

    const post = await respuesta.json()

    return {
        props: {
            post
        }
    }
}