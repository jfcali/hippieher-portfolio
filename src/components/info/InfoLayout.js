import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styles from './Info.module.css'

const infoLayout = props => {
  console.log(props)
  const [visibility, setVisibility] = useState(false)
  const classes = [styles.Info]
  if (visibility) classes.push(styles.Visible)
  useEffect(() => {
    setVisibility(true)
  }, [])
  return (
    <div className={classes.join(' ')}>
      <div className={styles.Content}>
        <Link className={styles.Back} to={props.backTo}>
          BACK
        </Link>
        <div className={styles.Container}>
          <div className={styles.Bio}>
            <h1>BIO</h1>
            <p>
              Hola! mi nombre es Diana Fernanda Vélez García, soy Diseñadora de
              Medios Interactivos con Máster en Periodismo de Investigación,
              Datos y Visualización, de la Universidad Internacional de la
              Rioja. Vivo en Barcelona. Trabajo en diseño de información con
              gran sensibilidad estética y aptitudes para la composición visual;
              experiencia en fotografía, producción audiovisual, diseño gráfico,
              ilustración, UI y UX.
            </p>
            <p>
              Actualmente trabajo en dirección de arte, interfaces y
              visualización de datos.
            </p>
          </div>
          <div className={styles.Contact}>
            <h2>CONTACT</h2>
            <ul>
              <li>+34 622 42 31 49</li>
              <li>dfernandavg@gmail.com</li>
              <li className={styles.Icons}>Instagram Twitter Behance Cargo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default infoLayout
