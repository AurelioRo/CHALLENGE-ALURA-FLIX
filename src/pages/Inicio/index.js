import { useState } from "react";
import Banner from "../../components/Banner";
import styles from "./Inicio.module.css"
import Card from "../../components/Card";
import EditarCard from "../../components/EditarCard";
import players from "../../data/db.json"


function Inicio() {

    const [videos, setVideos] = useState(players);

    const [cerrar, setCerrar] = useState(true)

    const [videoAEditar, setVideoAEditar] = useState({})

    const grupos = [
        {
            index: "1",
            grupo: "FRONT END",
            color: "#00C86F"
        },
        {
            index: "2",
            grupo: "BACK END",
            color: "#FFBA05"
        },
        {
            index: "3",
            grupo: "INNOVACIÓN Y GESTIÓN",
            color: "#6BD1FF"
        },


    ]

    return (
        <>

            <Banner />

            <section className={styles.sectionCard}>
                {grupos.map(grupo => <Card
                    key={grupo.index}
                    grupo={grupo.grupo}
                    color={grupo.color}
                    mostrar={setCerrar}
                    cerrar={cerrar}
                    videos={videos}
                    setVideos={setVideos}
                    setVideoAEditar={setVideoAEditar}
                />)

                }
            </section>


            <span style={cerrar ? { display: "none" } : { display: "flex" }} className={styles.span1}>

                <span className={styles.span2}>
                    <EditarCard 
                        mostrar={setCerrar}
                        cerrar={cerrar}
                        videoAEditar={videoAEditar}
                        equipos={Object.keys(videos)}
                        setVideoAEditar={setVideoAEditar}
                    />
                </span>


            </span>



        </>
    )

}

//<Card />

export default Inicio