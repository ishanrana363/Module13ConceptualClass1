
import "../MainContainer/maincontainer.css"
import Card from "./Card";
const MainContainer = () => {
    const data = [
        {id:1,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ipsum."},
        {id:2,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ipsum."},
        {id:3,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ipsum."},
        {id:4,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ipsum."},
        {id:5,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ipsum."},
    ]
    return (
        <div>
            <main>
                {
                    data.map((item)=>(
                        // eslint-disable-next-line react/jsx-key
                        <Card data = {item} />
                    ))
                }
            </main>
        </div>
    );
};

export default MainContainer;