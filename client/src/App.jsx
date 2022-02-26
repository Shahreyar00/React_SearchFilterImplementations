import { useEffect, useState } from 'react';
import "./App.css";
import Table from './Table';
import { Users } from "./users";
import axios from "axios";

////BASIC SEARCH METHOD////

// const App = () => {
//     const [search, setSearch] = useState("");

//     return (
//         <div className="app">
//             <input 
//                 className="search"
//                 placeholder="Search..."
//                 onChange={(e)=>setSearch(e.target.value.toLowerCase())}
//             />
//             <ul className="list">
//                 {Users.filter((abc)=>
//                     abc.first_name.toLowerCase().includes(search)
//                 ).map((user)=>(
//                     <li className="listItem" key={user.id}>
//                         {user.first_name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

////SEARCH A DATATABLE

// const App = () => {
//     const [query, setQuery] = useState("");
//     const keys = ["first_name","last_name","email"];
//     const search = (data)=>{
//         return data.filter((user)=>
//             keys.some((key)=>user[key].toLowerCase().includes(query))
//         );
//     };

//     return (
//         <div className="app">
//             <input 
//                 className="search"
//                 placeholder="Search..."
//                 onChange={(e)=>setQuery(e.target.value.toLowerCase())}
//             />
//             <Table data={search(Users)} />
//         </div>
//     )
// }

////API SEARCH

const App = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            const res = await axios.get(`http://localhost:5000?q=${query}`);
            setData(res.data);
        };
        if(query.length===0||query.length>2) fetchData();
    },[query])

    return (
        <div className="app">
            <input
                className="search"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            {<Table data={data} />}
        </div>
    )
}


export default App;