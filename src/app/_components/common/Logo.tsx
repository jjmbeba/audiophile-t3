import Image from 'next/image';
import React from 'react'

const Logo = () => {
  return (
    <Image src={"/audiophile-logo.svg"} width={143} height={25} alt="logo" />
  );
}

export default Logo