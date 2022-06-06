import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function Modal() {
  const [open, setOpen] = useRecoilState(modalState)

  return <div>{open && <p>THE MODAL IS OPEN</p>}</div>
}
