import "./App.css";

function App() {
  const style = {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  };
  const handleLogin = async () => {
    try {
      const fetchData = await fetch("http://localhost:9090/auth/url");
      const finalResult = await fetchData.json();
      console.log(finalResult);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={style}>
      <button onClick={handleLogin}>Login With Google</button>
    </div>
  );
}

export default App;
