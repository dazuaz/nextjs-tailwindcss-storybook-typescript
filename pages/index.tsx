import { Logo } from "components/Logo"
import { Button } from "components/Button"
import { Github } from "components/Github"

export default function Home() {
  return (
    <div className='bg-white'>
      <Github target='_blank' />
      <div className='max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='flex justify-center'>
          <Logo itHovers href='/' />
        </div>
        <div className='h-10'></div>
        <h2 className='text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
          Ready to dive in?
          <br />
          Start building something amazing.
        </h2>
        <div className='mt-8 flex justify-center'>
          <Button>Get started</Button>
          <Button isVariant className='ml-3'>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  )
}
