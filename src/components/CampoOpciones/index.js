import { useState } from "react"
import styles from "../CampoTexto/CampoTexto.module.css"

const CampoOpciones = (props) => {

    const [grupo, setGrupo] = useState(props.value || "")

    const callChange = (e) => {

        e.target.value = grupo

        setGrupo(e.target.value)

    }

    return (

        <div className={styles.caja}>

            <label className={styles.nombre}>{props.titulo}</label>

            <select className={styles.campo} onChange={callChange}>

                <option 
                    value="" 
                    disabled 
                    defaultValue="" 
                    hidden
                >Seleccionar equipo</option>

                {props.equipos.map((equipo, index) => {

                    return (
                        <option
                            key={index} 
                            value={equipo}
                        >{equipo}</option>
                    )

                })}

            </select>


        </div>
    )


}

export default CampoOpciones