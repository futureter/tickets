import styles from "@/styles/components/PriorityBadge.module.css"

const Priority = {
  High: "red",
  NonUrgent: "rgb(200, 200, 0)",
  Low: "green",
}

export default function PriorityBadge({ priority }) {
  return (
    <p
      className={styles.container}
      style={{ backgroundColor: Priority.NonUrgent }}
    >
      non-urgent
    </p>
  )
}
