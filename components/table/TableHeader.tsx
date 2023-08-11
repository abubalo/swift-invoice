import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    className?: string,
}

const TableHeader = ({children, className}: Props) => <thead className={className}>{children}</thead>
  

export default TableHeader