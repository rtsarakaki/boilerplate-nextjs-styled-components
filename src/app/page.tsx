'use client'

import Head from 'next/head'
import styled from 'styled-components'
import tw from 'twin.macro'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <StyledButton>In Styled Components</StyledButton>
      <TailwindButton>In Tailwind</TailwindButton>
    </div>
  )
}

const StyledButton = styled.button`
  background: red;
  color: white;
`

const TailwindButton = tw.button`
bg-red-500
text-white
`
