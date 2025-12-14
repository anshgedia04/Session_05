import Card from "./Components/Card"
import Card2 from "./Components/Card2"
import Card3 from "./Components/Card3"
import Card4 from "./Components/Card4"
import Card5 from "./Components/Card5"





function App() {
 const myObj = {
    name : "john",
    age : 23
 }
  return (
    <>
    <p>user 1</p>
    <Card name="john" age="23"></Card>

    <p>user 2</p>
    <Card2 Name="robert" age="22"></Card2>

    <p>user 3</p>
    <Card3 data={myObj}></Card3>

    <p>user 4</p>
    <Card4 data={myObj}></Card4>
    
    <p>user 5</p>
    <Card5 data={myObj}></Card5>
    </>
  )
}

export default App
