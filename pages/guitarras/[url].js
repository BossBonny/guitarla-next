import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "@/components/layout"

export default function Producto({data}) {

    const {nombre, descripcion, imagen, precio} = data[0]

    const urlImage = "http://192.168.1.251:1337"

    const dirImage = imagen.formats.medium.url


    return (
        <Layout
            title={`guitarra  ${nombre}`}    
        >
            <div className={styles.guitarra}>
                <Image src={`${urlImage}${dirImage}`} width={600} height={400} alt={`Imagen guitarra ${nombre}`}/>

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>{precio}</p>
                </div>
            </div>
        </Layout>

    )
}


export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const data = await respuesta.json()

    const paths =  data.map(guitarra => ({
        params: {
            url: guitarra.url
        }
    }))

    console.log(paths);

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params : {url}}){
    
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?url=${url}`)

    const data = await  respuesta.json()


    return{
        props: {
            data
        }
    }
}

/*export async function getServerSideProps({query : {url}}){
    
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?url=${url}`)

    const data = await  respuesta.json()


    return{
        props: {
            data
        }
    }
} */