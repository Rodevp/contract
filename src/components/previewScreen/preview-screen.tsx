import styles from "./previewScreen.module.css"
import { useContractStore } from "../../states/form"
export default function PreviewScreen() {

  const contract = useContractStore((state) => state.contract)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Previzualizador</h2>

      <div className={styles.document} id="contract-preview">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerItem}>
              <span className={styles.headerLabel}>Nombre empresa/persona:</span>
              <span className={styles.headerValue}>
                {
                  contract.clientName ? contract.clientName : "[NOMBRE DEL CLIENTE]"
                }
              </span>
            </div>
            <div className={styles.headerItem}>
              <span className={styles.headerLabel}>Teléfono:</span>
              <span className={styles.headerValue}>
                {
                  contract.phone ? contract.phone : "[TELÉFONO]"
                }
              </span>
            </div>
            <div className={styles.headerItem}>
              <span className={styles.headerLabel}>Email:</span>
              <span className={styles.headerValue}>
                {
                  contract.email ? contract.email : "[EMAIL]"
                }
              </span>
            </div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.headerItem}>
              <span className={styles.headerLabel}>Fecha:</span>
              <span className={styles.headerValue}>
                {
                  contract.date ? contract.date : "[FECHA]"
                }
              </span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.contractText}>
            La empresa/persona <span className={styles.placeholder}>{contract.companyName || "[NOMBRE EMPRESA]"}</span>
            debe a <span className={styles.placeholder}>{contract.contractorName || "[NOMBRE CONTRATISTA]"}</span>
            un total de <span className={styles.placeholder}>{contract.amount || "[MONTO]"}</span>
            por concepto de <span className={styles.placeholder}>{contract.jobDescription || "[DESCRIPCIÓN]"}</span>,
            por un tiempo de <span className={styles.placeholder}>{contract.estimatedTime || "[TIEMPO]"}</span>.
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
