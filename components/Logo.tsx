import Link, { LinkProps } from "next/link"
import cn from "classnames"
import Image from "next/image"
export interface LogoProps extends LinkProps {
  itHovers?: boolean
}

export const Logo: React.FC<LogoProps> = ({ itHovers = false, ...rest }) => {
  return (
    <Link {...rest}>
      <a
        className={cn({
          "w-auto h-full transition-transform duration-300 ease-in-out transform": true,
          "hover:scale-105": itHovers,
        })}
      >
        <Image src='/vercel.svg' alt='Vercel Logo' width='283' height='64' />
      </a>
    </Link>
  )
}
