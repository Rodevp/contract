import styles from "./previewScreen.module.css"

export default function PreviewScreen() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Previzualizador</h2>

      <div className={styles.document}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerItem}>
              <span className={styles.headerLabel}>Nombre empresa/persona:</span>
              <span className={styles.headerValue}>[NOMBRE DEL CLIENTE]</span>
            </div>
            <div className={styles.headerItem}>
              <span className={styles.headerLabel}>Teléfono:</span>
              <span className={styles.headerValue}>[TELEFONO]</span>
            </div>
            <div className={styles.headerItem}>
              <span className={styles.headerLabel}>Email:</span>
              <span className={styles.headerValue}>[EMAIL]</span>
            </div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.headerItem}>
              <span className={styles.headerLabel}>Fecha:</span>
              <span className={styles.headerValue}>[FECHA]</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.contractText}>
            La empresa/persona <span className={styles.placeholder}>[NOMBRE DEL CLIENTE]</span>
          </p>

          <p className={styles.contractText}>
            debe a <span className={styles.placeholder}>[NOMBRE DEL CONTRATISTA]</span> un total de{" "}
            <span className={styles.placeholder}>[MONTO]</span>
          </p>

          <p className={styles.contractText}>
            por concepto de <span className={styles.placeholder}>[DESCRIPCIÓN]</span>, correspondiente a la
          </p>

          <p className={styles.contractText}>
            <span className={styles.placeholder}>[FECHA]</span>.
          </p>
        </div>

        <div className={styles.signatures}>
          <div className={styles.signatureBox}>
            <div className={styles.signatureLine}></div>
            <span className={styles.signatureLabel}>firma contratista</span>
          </div>

          <div className={styles.signatureBox}>
            <div className={styles.signatureLine}></div>
            <span className={styles.signatureLabel}>firma cliente</span>
          </div>
        </div>
      </div>
    </div>
  )
}
