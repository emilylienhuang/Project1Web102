import './App.css';
import Card from './components/Card'
const App = () => {
  const cardData = [{title: "Title", description: "Description", link:"link"}]
  return (
    <div className="App">
      <h1> Project Work </h1>
      <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
      </div>
    </div>
  )
}

export default App;