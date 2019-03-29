import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to Next js test</h1>
            <ul className="list-group">
                {props.shows.map(({show}) => (
                    <li className="list-group-item" key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    </Layout>

  )

  Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data
    }
  }
  
  export default Index