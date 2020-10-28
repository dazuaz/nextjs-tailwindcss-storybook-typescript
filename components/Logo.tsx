import Link from "next/link"
import cn from "classnames"

export interface LogoProps {
  itHovers?: boolean
}

export const Logo: React.FC<LogoProps> = ({ itHovers = false }) => {
  return (
    <Link href='/'>
      <a>
        <img
          className={cn({
            "w-auto h-full transition-transform duration-300 ease-in-out transform": true,
            "hover:scale-105": itHovers,
          })}
          src='/vercel.svg'
          alt='Vercel Logo'
          width='283'
          height='64'
        />
      </a>
    </Link>
  )
}
