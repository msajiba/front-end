import Link from 'next/link'
import React from 'react'

const SuccessProduct = ({cartProduct}) => {
  return (
    <tr>
    <td>
      <Link href="#">{cartProduct?.title}</Link>
    </td>
    <td></td>
    <td></td>


    <td>{cartProduct?.quantityPrice} * {cartProduct?.quantity} = {cartProduct?.price} BDT</td>
  </tr>
  )
}

export default SuccessProduct