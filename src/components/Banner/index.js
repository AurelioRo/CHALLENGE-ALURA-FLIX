import styles from "./Banner.module.css"
import videoBanner from "./player.png"

function Banner() {


    return (
        <section className={styles.banner}>
            <div className={styles.cajaTexto}>
                <h1>FRONT-END</h1>
                <h2>Challenge React</h2>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>

            <div className={styles.cajaVideo}>
                
                <a href="https://developer.mozilla.org/en-US/">
                    <img
                        className={styles.video}
                        src={videoBanner}
                        alt="Video de Alura"
                    />
                </a>
            </div>

        </section>
    )
}

export default Banner