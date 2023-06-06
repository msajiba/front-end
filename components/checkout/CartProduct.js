import Link from 'next/link'
import React from 'react'

const CartProduct = ({cartProduct}) => {
  return (
    <tr>
    <td>
      <Link href="#">{cartProduct?.title}</Link>
    </td>
    <td></td>
    <td></td>


    <td>{cartProduct?.oneQuantityPrice}*{cartProduct?.quantity}={cartProduct?.price} BDT</td>
  </tr>
  )
}

export default CartProduct