import HeaderActions from "./components/HeaderActions"
import Logo from "./components/Logo"
import Search from "./components/Search"

function App() {
  return (
    <header className="flex gap-8 justify-between items-center">
      <Logo />
      <Search />
      <HeaderActions />
  </header>
  )
}

export default App