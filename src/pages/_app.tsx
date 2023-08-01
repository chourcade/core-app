import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <div>
    <nav style={{
      display: 'flex',
      justifyContent: 'flex-end',
      background:'blue',
      color:'white',
      padding:10,
    }}>
      <button style={{margin:5}} onClick={() => {router.push('/login')}}>Login</button>
      <button style={{margin:5}} onClick={() => {router.push('/playground/login')}}>Playground</button>
    </nav>
    <Component {...pageProps} />
  </div>
}
