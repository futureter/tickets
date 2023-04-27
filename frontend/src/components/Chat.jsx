import styles from '@/styles/components/Chat.module.css'

import Messages from './Messages'
import Input from './Input'

export default function Chat() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Niggers
        </h2>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
