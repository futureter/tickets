import styles from '@/styles/components/Messages.module.css'

import Message from './Message'

export default function Messages() {
  return (
    <div className={styles.container}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}
