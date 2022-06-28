import "../../pages/new/new.scss"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { userInputs } from "../../formSource";
// import { useState } from "react";

export const New = ({inputs, title}) => {


  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img className = "addImg" src="https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png" alt="add_img" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadIcon className="icon"/></label>
                <input type="file" id="file" style={{display: "none"}}/>
              </div>
              {inputs.map((input)=>(
                <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>

              ))}

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
