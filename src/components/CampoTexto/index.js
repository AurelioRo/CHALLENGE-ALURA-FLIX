import styles from "./CampoTexto.module.css"

const CampoTexto = (props) => {

    const callChange = (e) => {

        e.target.value = props.value

    }

    console.log(props.clase)

    return (
        <section className={styles.caja}>
            <label className={styles.nombre}>{props.titulo}</label>
            
            <input className={styles.campo} value={props.value} onChange={callChange} type={props.type} placeholder={props.placeholder} required={props.required} ></input>
        </section>
    )

}

export default CampoTexto

