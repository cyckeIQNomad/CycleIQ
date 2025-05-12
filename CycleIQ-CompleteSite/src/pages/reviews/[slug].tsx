import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/content/reviews'))
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('src/content/reviews', slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return { props: { frontmatter, content } }
}

export default function Post({ frontmatter, content }) {
  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
