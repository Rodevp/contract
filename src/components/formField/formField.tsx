import styles from "./formField.module.css"

interface FormFieldProps {
  label: string
  type: string
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function FormField({ label, type, placeholder, value, onChange }: FormFieldProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {type === "textarea" ? (
        <textarea className={styles.textarea} placeholder={placeholder} defaultValue={value} rows={4} onChange={onChange} />
      ) : (
        <input type={type} className={styles.input} placeholder={placeholder} defaultValue={value}  onChange={onChange}/>
      )}
    </div>
  )
}
