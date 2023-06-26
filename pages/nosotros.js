import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/nosotros.module.css"


export default function Nosotros() {
    return (
        <Layout 
        title={'Nosotros'}
        description="Sobre Nosotros, GuitarLA, tienda de música">
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen Sobre Nosotros"/>

                    <div className="">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie malesuada diam, et aliquet sapien iaculis rutrum.
                        Praesent sed sollicitudin turpis, ac finibus nisl. Quisque et aliquet turpis. Phasellus arcu elit, pellentesque sed consequat ut, euismod vitae nisi.
                        Nullam ligula lacus, pretium a volutpat at, blandit non tortor. Fusce aliquet lorem non magna faucibus porttitor. Pellentesque id odio nec augue viverra auctor vestibulum eget purus.
                        </p>
                        <p>
                        Curabitur aliquet, sem in sollicitudin accumsan, urna magna sollicitudin justo, sit amet ullamcorper lectus justo vel libero. Praesent tortor orci, lobortis vitae dapibus in, 
                        pellentesque nec nunc. Vivamus nunc nunc, lobortis vel purus ut, pretium facilisis est. Curabitur at ornare lectus, non pulvinar eros. Donec vel erat fermentum, congue velit ac, 
                        consequat lacus. Donec auctor interdum purus et sagittis. Proin convallis, tortor quis ultrices facilisis, ipsum purus ultrices lacus, sit amet consequat elit tellus id tellus.
                        Vivamus aliquet risus non lorem suscipit, eu mattis eros suscipit. Donec luctus leo leo, ac bibendum mi lacinia nec.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
