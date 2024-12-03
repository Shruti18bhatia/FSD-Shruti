import MovieList from "./movielist"
export const App = () => {
  return (<div>
    <h1 style={{
      backgroundColor : "black",
      color : "White",
      textAlign: "center",
      fontSize: "20px"}
    }>Netflix Clone App</h1>
    <MovieList/>
  </div>
)}

export default App