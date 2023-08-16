import Image from "next/image";
import Cat from "./blackCat.png";

const Footer =()=>{
    return(
        <div>
           <Image src={Cat} />
        </div>
    )
}

export default Footer;