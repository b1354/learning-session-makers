import React from 'react'
import styles from './SCard.module.css'

interface SCardProps {
    title?: string
    subtitle?: string
    children?: React.ReactNode
    footer?: React.ReactNode
    imageSrc?: string
    onClick?: () => void
    disabled?: boolean
    className?: string
}

const SCard = ({
    title,
    subtitle,
    children,
    footer,
    imageSrc,
    onClick,
    disabled = false,
    className = '',
}: SCardProps) => {
    const cardClassName = [
        styles.card,
        onClick && !disabled ? styles.clickable : '',
        disabled ? styles.disabled : '',
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div
            className={cardClassName}
            onClick={disabled ? undefined : onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick && !disabled ? 0 : undefined}
        >
            {imageSrc && <img src={imageSrc} alt={title ?? ''} className={styles.image} />}

            {(title || subtitle) && (
                <div className={styles.header}>
                    <div>
                        {title && <h3 className={styles.title}>{title}</h3>}
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>
                </div>
            )}

            <div className={styles.body}>
                {children ?? <p className={styles.placeholder}>No content</p>}
            </div>

            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    )
}

export default SCard