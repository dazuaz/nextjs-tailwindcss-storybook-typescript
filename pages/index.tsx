import Logo from "components/Logo"

export default function Home() {
  // Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  // Read the documentation to get started: https://tailwindui.com/documentation
  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className="flex justify-center">
          <Logo itHovers/>

        </div>
        <div className="h-10"></div>
        <h2 className='text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
          Ready to dive in?
          <br />
          Start building something amazing.
        </h2>
        <div className='mt-8 flex justify-center'>
          <div className='inline-flex rounded-md shadow'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
            >
              Get started
            </a>
          </div>
          <div className='ml-3 inline-flex'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out'
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
