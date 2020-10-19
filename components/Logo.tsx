import Link from "next/link"
import cn from "classnames"

type Props = {
  itHovers: boolean
}

const Logo = ({ itHovers }: Props) => {
  return (
    <Link href='/'>
      <a>
        <figure style={{ width: "283px", height: "64px" }}>
          <img
            className={cn({
              "w-auto h-full transition-transform duration-300 ease-in-out transform": true,
              "hover:scale-105": itHovers,
            })}
            src='/vercel.svg'
            alt='Vercel Logo'
          />
        </figure>
      </a>
    </Link>
  )
}
export default Logo
