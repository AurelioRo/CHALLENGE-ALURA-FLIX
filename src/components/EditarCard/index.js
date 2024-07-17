import CampoDescripcion from "../../components/CampoDescripcion/index"
import CampoTexto from "../../components/CampoTexto/index"
import CampoOpciones from "../../components/CampoOpciones"
import styles from "./EditarCard.module.css"

function EditarCard({ mostrar, cerrar, videoAEditar, equipos, setVideoAEditar }) {

    return (

        <form className={styles.form}>

            <section className={styles.cajaText}>

                <h1 className={styles.h1}>EDITAR CARD:</h1>

                <button className={styles.cerrar} type="button" onClick={() => {

                    mostrar(!cerrar)

                    setVideoAEditar({})

                }}>X</button>

            </section>

            <section className={styles.cajaForm}>

                <div className={styles.divForm}>

                    <CampoTexto
                        titulo="Título"
                        placeholder="Ingrese el título"
                        required
                        type="text"
                        value={videoAEditar.titulo}
                        clase="titulo"
                    />
                    <CampoOpciones
                        titulo="Categoría"
                        placeholder="Seleccione una categoría"
                        value={videoAEditar.grupo}
                        equipos={equipos}
                        className={styles.opciones}
                        clase="opciones"
                    />
                    <CampoTexto
                        titulo="Imagen"
                        placeholder="Ingrese el enlace de la imagen"
                        required
                        type="url"
                        value={videoAEditar.img}
                        className={styles.img}
                        clase="imagen"
                    />
                    <CampoTexto
                        titulo="Video"
                        placeholder="Ingrese el enlace el video"
                        required
                        type="url"
                        value={videoAEditar.url}
                        className={styles.video}
                        clase="video"
                    />
                    <CampoDescripcion
                        titulo="Descipción"
                        placeholder="¿De qué se trata este video?"
                        type="text"
                        value={videoAEditar.descripcion}
                        className={styles.descripcion}
                        clase="dexcripcion"
                    />

                </div>

                <button>GUARDAR</button>

                <button type="button">LIMPIAR</button>

            </section>

        </form>
    )
}

export default EditarCard