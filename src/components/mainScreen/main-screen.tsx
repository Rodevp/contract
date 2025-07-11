import FormScreen from "../formScreen/form-screen"
import PreviewScreen from "../previewScreen/preview-screen"
import styles from "./mainScreen.module.css"

export default function MainScreen() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.formSection}>
          <FormScreen />
        </div>

        <div className={styles.divider}></div>

        <div className={styles.previewSection}>
          <PreviewScreen />
        </div>
      </main>
    </div>
  )
}
