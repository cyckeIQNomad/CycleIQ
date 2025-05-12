import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src/content/news'))
  const posts = files.map(filename => ({
    slug: filename.replace('.md', '')
  }))
  return { props: { posts } }
}

export default function news({ posts }) {
  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">news Articles</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug} className="mb-2">
            <Link href={`/news/${post.slug}`}>{post.slug.replace(/-/g, ' ')}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
