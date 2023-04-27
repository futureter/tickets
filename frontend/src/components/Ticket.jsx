import styles from "@/styles/components/Ticket.module.css"

import PriorityBadge from "./PriorityBadge"

export default function Ticket({ title, time, tags, latestMessage }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.time}>{time}</p>
      </div>
      <PriorityBadge />
      <p className={styles.tags}>Tags: {tags}</p>
      <p className={styles.latestMessage}>{latestMessage}</p>
    </div>
  )
}
