import './App.css';
import Card from './components/Card'
const App = () => {
  const cardData = [{title: "Optimizing Caching Workloads with Kubernetes", description: "Implementing a working microservice architecture using Kubernetes and Docker Networks", link:"https://github.com/emilylienhuang/YOURLSKubernetesAndNetworks"},
    {title:"Productivity Optimization", description:"An application with an algorithmic optimization approach to productivity usign Spoon Theory.", link: "https://github.com/emilylienhuang/SpoonTheory"},
    {title: "AI/ML in IoT Devices", description: "Using AI/ML plus a full tech stack to implement interactive lighting schemes.", link: "https://github.com/emilylienhuang/AILightbulb"},
    {title: "Poetry Generation using Natural Languag Processing", description: "Generating N-gram poems across 5 languages with high reading ease scores and of 5th grader level comprehension.", link: "https://github.com/emilylienhuang/PoetryBot"},
    {title: "ML Algorithms for Big Data Classification and Clustering", description: "Testing machine learning algorithms to classify and cluster big data.", link: "https://github.com/emilylienhuang/MLProjects"},
    {title: "Consensus Dynamics in Network Game Modeling", description: "Modeling group behavior through consensus dynamics.", link:"https://github.com/emilylienhuang/GroupThink"},
    {title: "LRU versus LFU cache optimization", description: "Modeling cache optimization tradeoffs between an LRU and an LFU implementation", link: "https://github.com/emilylienhuang/LRU_LFUOptimization"},
    {title: "Embedded ticketing system", description: "Modeling an embedded system ticketing system in C using a variety of data structures and creating personal libraries.", link: "https://github.com/emilylienhuang/CProjects"},
    {title: "Algorithmic Exploration, Basic", description: "An in-depth exploration of algorithms and their optimizations ranging from simple sorting to Dynamic Programming and NP-Hard problems.", link: "https://github.com/emilylienhuang/AlgorithmExplorationsPartOne"},
    {title: "Leetcode Practice", description: "Track how I practice leetcode every day.", link: "https://github.com/emilylienhuang/leetcode"}
  ]
  return (
    <div className="App">
      <h1> Emily Ng's Project Work </h1>
      <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} link={card.link} />
      ))}
      </div>
    </div>
  )
}

export default App;