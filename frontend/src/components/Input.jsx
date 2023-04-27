import styles from "@/styles/components/Input.module.css"

export default function Input() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Text goes here..."
      />
      <div className={styles.send}>
        <input type="file" className={styles.fileInput} id="file" />
        <label htmlFor="file">
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
