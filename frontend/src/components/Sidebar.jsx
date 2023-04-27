import styles from '@/styles/components/Sidebar.module.css'

import TicketList from './TicketList'

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <TicketList />
    </div>
  )
}
