import ContentStyle from './content.module.css';
import Form from './form';
import Logo from "./assets/images/logo.png";

type TContent = {
    subtitle: string;
}

function Content(props: TContent) {
    return( 
        <div className={ContentStyle.area}>
            <div className={ContentStyle.form_area}>
                <div className={ContentStyle.subtitle}>{props.subtitle}</div>
                <img className={ContentStyle.logo} src={Logo} alt='logo Somebrr'/>
            </div>
            <Form/>
        </div>
    );
  }
export default Content;