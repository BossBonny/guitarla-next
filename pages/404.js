import Link from "next/link"
import Layout from "@/components/layout"

export default function Pagina404() {
    return (
        <Layout
            title="Página no encontrada"
        >
            <p className="error">Página no encontrada</p>
            <Link href='/' legacyBehavior>
                <a className="error-enlace">Ir al Inicio</a>
            </Link>
        </Layout>
    )
}
