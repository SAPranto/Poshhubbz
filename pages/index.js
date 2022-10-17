import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Image from 'next/image'


export default function Home() {
  return (
   <>
    <div className='justify-end'>
    <Image src="/home.webp" width={2000} height={900} alt="" />
    </div>
 
    
   </> 
  )
}