import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/${props.id}`} href={`/post?title=${props.title}`}>
      <a> {props.title} </a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1> Constellations! ☄️💫🛰️ </h1>
    <ul>
      <PostLink title="Capricorn"/>
      <PostLink title="Aquarius"/>
      <PostLink title="Pices"/>
      <PostLink title="Aries" />
      <PostLink title="Tarus" />
      <PostLink title="Gemini" />
      <PostLink title="Cancer" />
      <PostLink title="Leo" />
      <PostLink title="Virgo" />
      <PostLink title="Libra" />
      <PostLink title="Scorpio" />
      <PostLink title="Sagittarius" />
    </ul>
  </Layout>
)
