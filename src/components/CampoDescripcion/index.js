import css from "./CampoDescripcion.module.css"
import styles from "../CampoTexto/CampoTexto.module.css"

const CampoDescripcion = (props) => {

    return (
        <section className={styles.caja

        }>
            <label className={styles.nombre}>{props.titulo}</label>

            <input className={css.campo} placeholder={props.placeholder} type={props.type} ></input>

        </section>
    )


}

export default CampoDescripcion