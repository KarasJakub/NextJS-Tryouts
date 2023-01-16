import Link from "next/link"

const NewsPage = () => {
  return (
    <>
      <h1>Detail Page</h1>
      <ul>
        <li>
          <Link href="/news/hello">Hello</Link>
        </li>
        <li>Fuck wordpress</li>
      </ul>
    </>
  )
}

export default NewsPage
