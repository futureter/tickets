import styles from '@/styles/components/TicketList.module.css'

import Ticket from './Ticket'

export default function TicketList() {
  return (
    <div className={styles.container}>
      <Ticket
        title="niggers"
        time="02:28"
        tags="css, js"
        latestMessage="hey mary"
      />
      <Ticket
        title="niggers"
        time="02:28"
        tags="css, js"
        latestMessage="hey mary"
      />
      <Ticket
        title="niggers"
        time="02:28"
        tags="css, js"
        latestMessage="hey mary"
      />
    </div>
  )
}
