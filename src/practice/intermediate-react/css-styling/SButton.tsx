import React from 'react'
import styled, { css } from 'styled-components'

interface SButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
    children?: React.ReactNode
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger'
    size?: 'small' | 'medium' | 'large'
}

const variantStyles = {
    primary: css`
        background-color: #3b82f6;
        color: #ffffff;
        &:hover {
            background-color: #2563eb;
        }
    `,
    secondary: css`
        background-color: #6b7280;
        color: #ffffff;
        &:hover {
            background-color: #4b5563;
        }
    `,
    danger: css`
        background-color: #ef4444;
        color: #ffffff;
        &:hover {
            background-color: #dc2626;
        }
    `,
    tertiary: css`
        background-color: transparent;
        color: #3b82f6;
        &:hover {
            background-color: #dbeafe;
        }
    `,
}

const sizeStyles = {
    small: css`
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
    `,
    medium: css`
        font-size: 1rem;
        padding: 0.5rem 0.75rem;
    `,
    large: css`
        font-size: 1.125rem;
        padding: 0.75rem 1rem;
    `,
}

const StyledButton = styled.button<{
    $variant: 'primary' | 'secondary' | 'tertiary' | 'danger'
    $size: 'small' | 'medium' | 'large'
}>`
    height: fit-content;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease;

    ${(props) => variantStyles[props.$variant] || variantStyles.primary}
    ${(props) => sizeStyles[props.$size] || sizeStyles.medium}
`

const SButton = ({ variant = 'primary', size = 'medium', text, children, ...props }: SButtonProps) => {
    return (
        <StyledButton $variant={variant} $size={size} {...props}>
            {text ? text : children}
        </StyledButton>
    )
}

export default SButton
