import React , {Component} from "react";
import BannerContent from "./BannerContent";
import MessageEnvoye from "./MessageEnvoye";
import MessageRecu from "./MessageRecu";
import SendText from "./SendText";

class Contents extends Component {
    state = {
        
    }
    render(){
        return(
            <div className="relative bg-white w-right-side mx-96 h-screen">
                <BannerContent></BannerContent>
                <div className="absolute hidden laptop:flex desktop:flex flex-col justify-between ml-4 my-20 w-11/12 h-64 space-y-64">
                    <MessageRecu></MessageRecu>
                    <MessageEnvoye></MessageEnvoye>
                </div>
                <SendText></SendText>
            </div>
        );
    }
}
export default Contents;