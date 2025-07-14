import FormField from "../formField/formField"
import DownloadButton from "../button/downloadButton"
import { useContractStore } from "../../states/form"

import styles from "./formScreen.module.css"
export default function FormScreen() {

  const updateField = useContractStore((state) => state.updateField)
  const contract = useContractStore((state) => state.contract)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Información del contrato</h2>

      <form className={styles.form}>
        <FormField
          label="Nombre Contratante" 
          type="text" 
          placeholder="Nombre Contratante"
          value={contract.clientName}
          onChange={(e) => updateField("clientName", e.target.value)}  
        />

        <FormField
          label="Nombre Contrantista"
          type="text"
          placeholder="Nombre Contrantista"
          value={contract.contractorName}
          onChange={(e) => updateField("contractorName", e.target.value)}  
        />

        <FormField
          label="Descripción del Trabajo"
          type="textarea"
          placeholder="Descripción del Trabajo"
          value={contract.jobDescription}
          onChange={(e) => updateField("jobDescription", e.target.value)}  
        />

        <FormField
          label="Monto"
          type="text"
          placeholder="Monto"
          value={contract.amount}
          onChange={(e) => updateField("amount", e.target.value)}
        />

        <FormField
          label="Tiempo Estimado"
          type="text"
          placeholder="Tiempo Estimado"
          value={contract.estimatedTime}
          onChange={(e) => updateField("estimatedTime", e.target.value)}  
        />

        <FormField
          label="Teléfono"
          type="tel"
          placeholder="Ingrese el número de teléfono"
          value={contract.phone}  
          onChange={(e) => updateField("phone", e.target.value)}
        />

        <FormField 
          label="Email"
          type="email"
          placeholder="Ingrese el correo electrónica"
          value={contract.email}  
          onChange={(e) => updateField("email", e.target.value)}
        />

        <FormField
          label="Nombre Empresa/Persona"
          type="text"
          placeholder="Nombre Empresa/Persona"
          value={contract.companyName}
          onChange={(e) => updateField("companyName", e.target.value)}  
        />

        <FormField
          label="Fecha"
          type="date"
          placeholder=""
          value={contract.date}
          onChange={(e) => updateField("date", e.target.value)}  
        />

        <div className={styles.buttonContainer}>
          <DownloadButton
            onClick={() => console.log(contract)}
          />
        </div>
      </form>
    </div>
  )
}
