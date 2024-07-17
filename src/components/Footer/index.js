import styles from "./Footer.module.css"
import LogoMain from "../Header/LogoMain.png"

function Footer() {
    return (
        <section className={styles.footer}>
            <img className={styles.img} src={LogoMain} alt="Logo Alura" />
        </section>
    )
}

export default Footer