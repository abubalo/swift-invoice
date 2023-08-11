import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    className: string,
}

const TableRow = ({children, className}: Props) => {
  return (
    <div>
        <table className={className}>{children}</table>
    </div>
  )
}

export default TableRow