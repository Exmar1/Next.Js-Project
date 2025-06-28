import React from 'react'
import { P_props } from './P_props'
import styles from './p.module.css'

export const P = ({ size, children }: P_props): React.JSX.Element => {
	switch (size) {
		case '14px':
			return <p className={styles.p14}>{children}</p>
		case '16px':
			return <p className={styles.p16}>{children}</p>
		case '18px':
			return <p className={styles.p18}>{children}</p>
		default:
			return <p className={styles.p16}>{children}</p>
	}
}
