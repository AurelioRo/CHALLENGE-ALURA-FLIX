import NuevoVideo from "../../pages/NuevoVideo"
import AzulLink from "../AzulLink"
import BlancoLink from "../BlancoLink"
import styles from "./Header.module.css"
import LogoMain from "./LogoMain.png"

function Header() {

    return (
        <section className={styles.header}>
        
            <img className={styles.logo} src={LogoMain} alt="Logo Alura-Flix" />

            <nav className={styles.divBotones}>

                <AzulLink url="./">
                    HOME
                </AzulLink>

                <BlancoLink url="./NuevoVideo">
                    NUEVO VIDEO
                </BlancoLink>

            </nav>
        </section>
    )
}

export default Header