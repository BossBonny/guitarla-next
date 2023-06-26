import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import styles from "../styles/grid.module.css"


export default function Tienda({guitarras}) {

    return (
        <Layout 
        title={'Tienda Virtual'}
        description="Tienda Virtual, venta de guitarras, instrumentos, GuitarLA, tienda de música">

        <main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>

            <div className={styles.grid}>
                {guitarras.map(guitarra => (
                <Guitarra
                    key={guitarra.id}
                    guitarra={guitarra}
                />
            ))}
            </div>

        </main>

        </Layout>
    )
}

/*export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const guitarras = await respuesta.json()
    return {
        props:{
            guitarras
        }
    }
}*/

export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const guitarras = await respuesta.json()
    return {
        props:{
            guitarras
        }
    }
}
