import React, { ReactNode } from 'react'

type TableProps = {
    children: ReactNode,
    className?: string,
}

const Tabe = ({children, className}: TableProps) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
        <table className={className}>{children}</table>
    </div>
  )
}

export default Tabe