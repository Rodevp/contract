import styles from "./downloadButton.module.css"

interface DownloadButtonProps {
  onClick: () => void
}
export default function DownloadButton({ onClick }: DownloadButtonProps) {

  return (
    <button className={styles.button} onClick={onClick} type="button">
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download PDF
    </button>
  )
}
