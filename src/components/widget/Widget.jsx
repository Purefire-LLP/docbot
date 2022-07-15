import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccessibleIcon from '@mui/icons-material/Accessible';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export const Widget = ({ type }) => {

    let data;
    //temporary data
    const stat=20

    switch(type){
        case "patients":
            data={
                title:"Patients",
                icon: <AccessibleIcon className="icon"/>,
            };
            break;
        case "reports":
            data={
                title:"Reports",
                icon: <SummarizeIcon className="icon"/>,
            };
            break;
        case "consultations":
            data={
                title:"Consultations",
                icon: <ChatBubbleOutlineIcon className="icon"/>,
            };
            break;
        case "experience":
            data={
                title:"Experience",
                icon: <SentimentSatisfiedAltIcon className="icon"/>,
            };
            break;

        default:
            break;
    }



  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{stat}</span>
            <span className="link">See All</span>
        </div>
        <div className="right">
            <div className="stat positive">
                <KeyboardArrowUpIcon/>
                20%
            </div>
            {data.icon}
        </div>
    </div>
  )
}
