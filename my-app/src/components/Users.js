import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
 
function Users() {
    const {id} = useParams(); 
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
      
      
      useEffect(()=> {
        axios.get('http://localhost:3001/')
        .then(res => {
            console.log(res);
            setData(res.data);
        })
        .catch(err => console.log(err));
      }, [id])

      const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteuser/'+id)
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err));

    }

    const filteredUsers = data.filter((nodeexpressdb) => nodeexpressdb.CarName.toLowerCase().includes(searchQuery.toLowerCase()))

  return (   
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <Link to="/create" className="btn btn-outline-primary mb-2">
              Add Vehicle
            </Link>
          </div>
          <div className="col">
            <input
             type="text"
             placeholder="Search by name"
             className="form-control mb-2"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>CarName</th>
              <th>Manufacturer</th>
              <th>Year</th>
              <th>Country</th>
              <th>Propulsion</th>
            </tr>
          </thead>
          <tbody>
          {
                filteredUsers.map((user, index) => {
                    return <tr key={index}>
                        <td>{user.CarName}</td>
                        <td>{user.Manufacturer}</td>
                        <td>{user.Year}</td>
                        <td>{user.Country}</td>
                        <td>{user.Propulsion}</td>
                        <td>
                            <Link to={`/edit/${user._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                            <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                })
            }
          </tbody>
        </table>
      
    </div>
  </div>
  );
}
 
export default Users;