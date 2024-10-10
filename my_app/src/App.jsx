import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample_class from './component/Sample'
import Demo_class from './component/Demo'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <h2>count is {count}</h2>
//         <button onClick={() => count <10 && setCount((count) => count + 1)}>
//           + 
//         </button>
//         <button onClick={() => count > 0 && setCount((count) => count - 1)}>
//           -
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// function App() {
//   const data = [
//     { id:1,name:'kar',age:10},
//     { id:2,name:'ark',age:20},
//     { id:3,name:'rka',age:30}
//   ]

//   return (
//     <> 
//     <h1>student admission</h1>
//      <table>
//       <thead>
//         <th>id</th>
//         <th>name</th>
//         <th>age</th>
//       </thead>
//       <tbody>
//         {data.map((element)=>(
//           <tr key={element.id}>
//             <td>{element.id}</td>
//             <td>{element.name}</td>
//             <td>{element.age}</td>
//           </tr>
//         ))}
//       </tbody>
//      </table>
//     </>
//   )
// }

// export default App


// function App() {

//   return (
//     <> 
//     <div>
//       <Sample_class/>
//     </div>
//     </>
//   )
// }

// export default App

function App() {

  return (
    <> 
    <div>
      <Sample_class color='green' width='200px'/>
      <Demo_class/>
    </div>
    </>
  )
}

export default App

