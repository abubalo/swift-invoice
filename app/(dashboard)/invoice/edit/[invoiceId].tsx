import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import EditInvoiceForm, { InitialValues as FormData } from '../../components/EditInvoiceForm'

type Props = {}

const Edit = (props: Props) => {
  const router = useRouter();
  const {invoiceId} = router.query;

  const [data, setData] = useState<FormData| null>(null)

  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios.get(`/api/invoices?id=${invoiceId}`);
      const data = await res.data;
      setData(data);
    }
    fetchData();
  },[invoiceId])

  return (
    <div>
      <EditInvoiceForm data={data}/>
    </div>
  )
}

export default Edit