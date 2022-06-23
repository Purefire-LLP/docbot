import "./progress.scss"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
export const Progress = () => {
  return (
    <div className="progress">
        <div className="top">
            <h3 className="title">Patient Visit</h3>
        </div>
        <div className="bottom">
            <div className="progressbar">
                <CircularProgressbar value={50} text="50%"/>
            </div>
            <p className="title">Patient visit by department</p>
        </div>
    </div>
  )
}
