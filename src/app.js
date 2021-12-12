
const App = () => {
  const App = document.createElement("main")
  const p = document.createElement('p')
  p.textContent = "Hello world"
  p.className = "font-bold"
  App.appendChild(p)
  return App
}

export default App