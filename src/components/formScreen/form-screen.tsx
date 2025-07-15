import FormField from "../formField/formField"
import DownloadButton from "../button/downloadButton"
import { useContractStore } from "../../states/form"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

import styles from "./formScreen.module.css"
export default function FormScreen() {

  const updateField = useContractStore((state) => state.updateField)
  const resetContract = useContractStore((state) => state.resetContract)
  const contract = useContractStore((state) => state.contract)

  const handleDownloadPDF = () => {
    const input = document.getElementById("contract-preview")
    //@ts-ignore
    input.style.width = "210mm"
    //@ts-ignore
    input.style.height = "297mm"

    if (!input) return

    html2canvas(input, { scale: 2 }).then((canvas) => {

      const imgData = canvas.toDataURL("image/png")

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()

      const imgWidth = pdfWidth
      const imgHeight = (canvas.height * pdfWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      pdf.save("contrato.pdf")

      //@ts-ignore
      input.style.width = "100%"
      //@ts-ignore
      input.style.height = "100%"

    })
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Información del contrato</h2>

      <form
        className={styles.form}
        onSubmit={(e) => e.preventDefault()}
      >
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
            onClick={() => {
              console.log(contract)
              handleDownloadPDF()
              resetContract()
            }}
          />
        </div>
      </form>
    </div>
  )
}
