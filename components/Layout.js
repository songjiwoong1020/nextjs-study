const { default: NavBar } = require("./NavBar")

const Layout = ({children}) => {
  return (
    <>
      <NavBar/>
      <div>{children}</div>
    </>
  )
}

export default Layout;