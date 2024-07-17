import { Link } from "react-router-dom"
import styles from "./AzulLink.module.css"

function AzulLink({ url, children }) {
    return (
        <>
            <Link to={url}>
                <button className={styles.botonAzul}>
                    {children}
                </button>
            </Link>
        </>
        

                
    )
}

export default AzulLink