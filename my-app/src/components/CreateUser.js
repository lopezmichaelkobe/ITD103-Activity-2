import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
function CreateUser() {

    const [CarName, setCarName] = useState()
    const [Manufacturer, setManufacturer] = useState()
    const [Year, setYear] = useState()
    const [Country, setCountry] = useState()
    const [Propulsion, setPropulsion] = useState()

    const navigate = useNavigate()
 
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/create', {CarName, Manufacturer, Year, Country, Propulsion})
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
 
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Vehicle</h2>
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
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default CreateUser;