import Image from "next/image";
import React from "react";

const InvoiceTemplate = () => {
  return (
    <section>
      <div id="invoice-header">
        <div id="company-name" className="">
          <Image src="" alt="" width={50} height={50} className="" />
          <h3>Company Name: XYZ Solutions Inc.</h3>
          <address>Address: 123 Main Street, City, State, Zip Code</address>
          <p>Phone No: (123) 456-7890</p>
          <p>Email: info@xyzsolutions.com</p>
          <p>Invoice No: INV-2023-001</p>
          <p>Date issued: August 3, 2023</p>
        </div>
        <div id="bill-to" className="">
          <h3>Bill To</h3>
          <p>John Doe</p>
          <address>456 Oak Avenue, City, State, Zip Code</address>
          <p>Email: Johndoe@gmail.com</p>
        </div>
      </div>

      <div>
        <table>
          <tr>
            <th>Discribtion</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>Web Design Service</td>
            <td>2</td>
            <td>$500</td>
            <td>$1,000</td>
          </tr>
          <tr>
            <td>Copywriting Service</td>
            <td>3</td>
            <td>$100</td>
            <td>$300</td>
          </tr>
          <tr>
            <td colSpan={3} align="right">
              Subtotal:
            </td>
            <td>$1,600</td>
          </tr>
          <tr>
            <td colSpan={3} align="right">
              Tax (8%):
            </td>
            <td>$128</td>
          </tr>
          <tr>
            <td colSpan={3} align="right">
              Total:
            </td>
            <td>$1,728</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default InvoiceTemplate;
