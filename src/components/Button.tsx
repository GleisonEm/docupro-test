import React from 'react'

interface ButtonProps {
  text: string

  className: string

  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] ${className}`}
      onClick={onClick}
    >
      <span className="truncate">{text}</span>
    </button>
  )
}

export default Button
