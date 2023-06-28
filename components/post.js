import Image from "next/image"
import Link from "next/link"
import styles from "../styles/blog.module.css"
import { formatearFecha } from "@/utils/helpers"

export default function Post({post}) {

    const {contenido, imagen, titulo, url, published_at } = post

    return (
        <article>
            <Image src={`http://192.168.1.251:1337${imagen.formats.medium.url}`} width={600} height={400} alt={`Imagen blog ${titulo}`}/>

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link href={`/blog/${url}`} legacyBehavior>
                    <a className={styles.enlace}>
                        Leer Post
                    </a>
                </Link>
            </div>
        </article>
    )
}
