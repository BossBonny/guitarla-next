import Image from "next/image"
import Link from "next/link"

export default function Post({post}) {

    const {contenido, imagen, titulo, url, publishedAt } = post

    return (
        <article>
            <Image src={`http://192.168.1.251:1337${imagen.formats.medium.url}`} width={600} height={400} alt={`Imagen blog ${titulo}`}/>

            <div>
                <h3>{titulo}</h3>
                <p>{publishedAt}</p>
                <p>{contenido}</p>
                <Link href={`/blog/${url}`} legacyBehavior>
                    <a>
                        Leer Post, ahh prrro esta es la prueba
                    </a>
                </Link>
            </div>
        </article>
    )
}
