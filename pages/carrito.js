import { useEffect, useState } from "react"
import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/carrito.module.css"

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0 )
        setTotal(calculoTotal)
    },[carrito])

    return (
        <Layout title="Carrito de Compras">
            <main className="contenedor">
                <h1 className="heading">Compras</h1>

                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Artículos: </h2>

                        {carrito.lenght===0 ? "carrito Vacio"  : (
                            carrito.map(producto => (
                                <div key={producto.id}  className={styles.producto}>
                                    <div>
                                        <Image src={`http://192.168.1.251:1337${producto.imagen}`} width={150} height={30} alt={producto.nombre}/>
                                    </div>
                                    <div>
                                        <p className={styles.nombre}>{producto.nombre}</p>

                                        <div className={styles.cantidad}>
                                            <p> Cantidad: </p>

                                            <select 
                                                className={styles.select}
                                                onChange={e => actualizarCantidad({
                                                    id: producto.id,
                                                    cantidad: e.target.value
                                                })}
                                                value={producto.cantidad}
                                            >
                                                <option value="0">--Seleccione--</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>

                                        </div>

                                        <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                        <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                                    </div>

                                    <button
                                        className={styles.eliminar}
                                        type="button"
                                        onClick={() => eliminarProducto(producto.id)}
                                        >
                                            Eliminar
                                    </button>

                                </div>
                            ))
                        )}
                    </div>
                    <aside className={styles.resumen}>
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar: ${total} </p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}
