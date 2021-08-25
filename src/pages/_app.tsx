import "../styles/index.css"
import "tailwindcss/tailwind.css"
import { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp
