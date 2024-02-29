'use client'

import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <StyledButton>In Styled Components</StyledButton>
    </div>
  )
}

const StyledButton = styled.button`
  background: red;
  color: white;
`
