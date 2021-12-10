import "./detailMovie.scss"
import { DehazeOutlined } from "@material-ui/icons"

export default function DetailMovie({id}) {
    console.log(id)
    return (
        
        <div className="detail">
            <DehazeOutlined className="icons-title"/>
            <span className="detailTitle">Details</span>
            <div className="desc">
            {id.desc}
            </div>
            <div className="gerneral-gerne">
                <span className="gerne">Action</span>
                <span className="gerne">Adventure</span>
                <span className="gerne">Horror</span>
            </div>
            <div className="gerne-items">
            <div className="items">
                <span className="items-item">Release Date</span>
                <span className="time">Dec 17, 2021</span>
            </div>
            <div className="items">
                <span className="items-item">Limit</span>
                <span className="country">+{id.limit}</span>
            </div>
            <div className="items">
                <span className="items-item">Official sites</span>
                <span className="site">{id.site}</span>
            </div>
            <div className="items">
                <span className="items-item">Language</span>
                <span className="language">English</span>
            </div>
            <div className="items">
                <span className="items-item">Productions Companies</span>
                <span className="company">Marvel Studio</span>
            </div>
            </div>   
        </div>
    )
}