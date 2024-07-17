import CampoDescripcion from "../../components/CampoDescripcion/index"
import CampoTexto from "../../components/CampoTexto/index"
import CampoOpciones from "../../components/CampoOpciones"
import styles from "./NuevoVideo.module.css"

function NuevoVideo(props) {
    return (
        <form className={styles.form}>
            <h1>NUEVO VIDEO</h1>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>

            <section>
                <h2>Crear Tarjeta</h2>
                <div>
                    <CampoTexto
                        titulo="Título"
                        placeholder="Ingrese el título"
                        required
                        type="text"
                    />
                    <CampoOpciones 
                        titulo="Categoría"
                        placeholder="Seleccione una categoría"

                    />
                    <CampoTexto 
                        titulo="Imagen"
                        placeholder="Ingrese el enlace de la imagen"
                        required
                        type="url"
                    />
                    <CampoTexto
                        titulo="Video"
                        placeholder="Ingrese el enlace el video"
                        required
                        type="url"
                    />
                    <CampoDescripcion
                        titulo="Descipción"
                        placeholder="¿De qué se trata este video?"
                        type="text"
                    />
                    
                </div>
                <button></button>
            </section>
        </form>
    )
}

export default NuevoVideo