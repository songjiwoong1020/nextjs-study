import NavBar from "@/components/NavBar";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        h1 {
          color: green;
        }
      `}</style>
    </>
  )
};

export default App;