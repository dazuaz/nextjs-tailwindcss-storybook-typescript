import Link from "next/link"
import Image from "next/image"

import cn from "classnames"

type Props = {
  itHovers: boolean
}

const Logo = ({ itHovers }: Props) => {
  return (
    <Link href='/'>
      <a>
          <Image className={cn({
              "w-auto h-full transition-transform duration-300 ease-in-out transform": true,
              "hover:scale-105": itHovers,
            })} src="/vercel.svg" alt='Vercel Logo' width="283" height="64" priority/>

      </a>
    </Link>
  )
}
export default Logo
