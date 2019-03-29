import PostLink from '../components/PostLink'
import Layout from '../components/Layout'

const Blog = () => {
    return (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink title="Hello Next.js" />
          <PostLink title="Learn Next.js is awesome" />
          <PostLink title="Deploy apps with Zeit" />
        </ul>
      </Layout>
    )
  }

  export default Blog