import styles from "./Card.module.css"

function Card({ grupo, color, mostrar, cerrar, videos, setVideoAEditar }) {

    const editarCard = (vid) => {

        setVideoAEditar(vid)

    }

    return (

        <section className={styles.sectionCard}>

            <h1 style={{ backgroundColor: `${color}` }} className={styles.h1}>{grupo}</h1>

            <section className={styles.imagenes}>

                {videos[grupo].map(vid => {

                    return (

                        <section className={styles.cajaCard}>

                            <img className={styles.img} src={vid.img} alt={vid.titulo} />

                            <div className={styles.cajaBoton}>

                                <button onClick={() => {
                                    mostrar(!cerrar)
                                    editarCard(vid)
                                }} className={styles.botones}>EDITAR</button>

                                <button className={styles.botones}>BORRAR</button>

                            </div>

                        </section>
                    )

                })}

            </section>

        </section >
    )

}

//<div key={vid.id} className={styles.cajaimg}></div>

export default Card