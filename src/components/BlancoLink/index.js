import { Link } from "react-router-dom"
import styles from "./BlancoLink.module.css"

function BlancoLink({ url, children }) {
    return (
        <>
            <Link to={url}>
                <button className={styles.botonBlanco}>
                    {children}
                </button>
            </Link>
        </>
        

                
    )
}

export default BlancoLink