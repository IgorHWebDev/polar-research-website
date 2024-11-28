import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const router = useRouter()

  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>
        About
      </Link>
      <Link href="/projects" className={router.pathname === "/projects" ? "active" : ""}>
        Projects
      </Link>
      <Link href="/contact" className={router.pathname === "/contact" ? "active" : ""}>
        Contact
      </Link>
      <Link href="/donate" className={router.pathname === "/donate" ? "active" : ""}>
        Donate
      </Link>
    </nav>
  )
}
