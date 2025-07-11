import FormField from "../formField/formField"
import DownloadButton from "../button/downloadButton"
import styles from "./formScreen.module.css"

export default function FormScreen() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Información del contrato</h2>

      <form className={styles.form}>
        <FormField label="Nombre Contratante" type="text" placeholder="Nombre Contratante" />

        <FormField label="Nombre Contrantista" type="text" placeholder="Nombre Contrantista" />

        <FormField label="Descripción del Trabajo" type="textarea" placeholder="Descripción del Trabajo" />

        <FormField label="Monto" type="text" placeholder="Monto" />

        <FormField label="Tiempo Estimado" type="text" placeholder="Tiempo Estimado" />

        <FormField label="Teléfono" type="tel" placeholder="Ingrese el número de teléfono" />

        <FormField label="Email" type="email" placeholder="Ingrese el correo electrónica" />

        <FormField label="Nombre Empresa/Persona" type="text" placeholder="Nombre Empresa/Persona" />

        <FormField label="Fecha" type="date" placeholder="" />

        <div className={styles.buttonContainer}>
          <DownloadButton />
        </div>
      </form>
    </div>
  )
}
