
import { FC } from "react";
import gitHubLogo from "./../assets/github.png";
import linkedInLogo from "./../assets/linkedin.svg";

const social: FC = () => {
    return (
        <div className="social">
            <a className="item" href="https://www.linkedin.com/in/wilfredo-oswaldo-hern%C3%A1ndez-argueta-210108204/"  >
                <img src={linkedInLogo} alt="LinkdIn Logo" />
                <div className="fs-12 fc-transparent">
                    Wilfredo Hernández
            </div>
            </a>
            <a className="item" href="https://github.com/Woohaik"  >
                <img src={gitHubLogo} alt="Github Logo" />
                <div className="fs-12 fc-transparent" >
                    Woohaik
                </div>
            </a>

        </div>
    );
};
export default social;