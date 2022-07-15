import "../../pages/single/single.scss"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"


export const Single = () => {
  return (
    <div className='singleUser'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <h2 className="title">Information</h2>
            <div className="item">
              <img className="itemImg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="profile_img" />
              <div className="details">
                <h2 className="itemName">Jane Doe</h2>
                <div className="itemDetail">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">j.doe@exampleclinic.com</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91234567892</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Position:</span>
                  <span className="itemValue">Registered Nurse</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">Pediatrics</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Employment Type:</span>
                  <span className="itemValue">Permanent</span>
                </div>
                <div className="itemDetail">
                  <span className="itemKey">Employment Start Date:</span>
                  <span className="itemValue">1st June, 2022</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">

          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}
