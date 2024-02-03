import "./App.css";

function App() {
  const style = {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={style}>
      <button>Login With Google</button>
    </div>
  );
}

export default App;
