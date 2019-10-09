import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styles from './Info.module.css'

import instagram from '../../images/icon/instagram (1).svg'
import behance from '../../images/icon/behance (1).svg'
import dribbble from '../../images/icon/dribbbble (1).svg'
import flickr from '../../images/icon/flickr (1).svg'
import tumblr from '../../images/icon/tumblr (1).svg'
import linkedin from '../../images/icon/linkedin.svg'

const infoLayout = props => {
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
              <li>
                <a href="tel:+34622423149">+34 622 42 31 49</a>
              </li>
              <li>
                <a href="mailto:dfernandavg@gmail.com">dfernandavg@gmail.com</a>
              </li>
              <li className={styles.Icons}>
                <a href="https://www.instagram.com/hippieher/" target="_BLANK">
                  <img className={styles.Logo} src={instagram} />
                </a>{' '}
                <a href="https://www.behance.net/fernandavelez" target="_BLANK">
                  <img className={styles.Logo} src={behance} />
                </a>{' '}
                <a href="https://dribbble.com/fher" target="_BLANK">
                  <img className={styles.Logo} src={dribbble} />
                </a>{' '}
                <a
                  href="https://www.flickr.com/photos/dfernandavg/"
                  target="_BLANK"
                >
                  <img className={styles.Logo} src={flickr} />
                </a>{' '}
                {/* <a href="https://www.behance.net/fernandavelez" target="_BLANK">
                  <img className={styles.Logo} src={tumblr} />
                </a>{' '}
                <a href="https://www.behance.net/fernandavelez" target="_BLANK">
                  <img className={styles.Logo} src={linkedin} />
                </a>{' '} */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default infoLayout
