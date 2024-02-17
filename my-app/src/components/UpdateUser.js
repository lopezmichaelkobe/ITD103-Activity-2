import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
function UpdateUser() {

    const {id} = useParams()
    const [CarName, setCarName] = useState()
    const [Manufacturer, setManufacturer] = useState()
    const [Year, setYear] = useState()
    const [Country, setCountry] = useState()
    const [Propulsion, setPropulsion] = useState()
     
    useEffect(()=> {
        const fetchData = async() => {
            try { 
                const response = await axios.get("http://localhost:3001/get/"+id);
                console.log(response);
                setCarName(response.data.CarName)
                setManufacturer(response.data.Manufacturer)
                setYear(response.data.Year)
                setCountry(response.data.Country)
                setPropulsion(response.data.Propulsion)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    }, [id] )
     
    const navigate = useNavigate()
 
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/update/'+id, {CarName, Manufacturer, Year, Country, Propulsion})
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
 
    return ( 
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">CarName</label>
            <input
              type="text"
              placeholder="Enter Car Name"
              className="form-control"
              onChange={(e) => setCarName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Manufacturer</label>
            <input
              type="text"
              placeholder="Enter Manufacturer"
              className="form-control"
              onChange={(e) => setManufacturer(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Year</label>
            <input
              type="text"
              placeholder="Enter Year"
              className="form-control"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>  
          <div className="mb-2">
            <label htmlFor="">Country</label>
            <input
              type="text"
              placeholder="Enter Country"
              className="form-control"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Propulsion</label>
            <input
              type="text"
              placeholder="Enter Engine Propulsion"
              className="form-control"
              onChange={(e) => setPropulsion(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
     );
}
 
export default UpdateUser;