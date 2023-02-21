import "@/styles/globals.css";
import Lauout from "@/components/Lauout";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Lauout>
        <Component {...pageProps} />
      </Lauout>
    </>
  );
}
