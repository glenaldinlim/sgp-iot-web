import Link from 'next/link'

const BottomNav = () => {
    return (
    <nav className="absolute inset-x-0 bottom-0 bg-white shadow">
      <ul className="flex flex-row justify-evenly">
        <li className="w-full text-center hover:text-green-400">
          <Link href="/">
            <a className="flex flex-col p-2">
              <i className="bi bi-house text-3xl"></i>
              <span className="text-sm">Home</span>
            </a>
        </Link>
        </li>
        <li className="w-full text-center hover:text-green-400">
          <Link href="/control">
            <a className="flex flex-col p-2">
              <i className="bi bi-gear text-3xl"></i>
              <span className="text-sm">Control</span>
            </a>
        </Link>
        </li>
      </ul>
		</nav>
    )
}

export default BottomNav;