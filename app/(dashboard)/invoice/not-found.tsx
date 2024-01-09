import Link from 'next/link'
import React from 'react'


const NotFound = () => {
  return (
    <div>
        <div>Invoice does not exists</div>
        <Link href="/dashboard">Go back</Link>
    </div>
  )
}

export default NotFound