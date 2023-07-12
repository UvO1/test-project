import FooterStyle from "./footer.module.css";

function Footer(){
    return(
    <div className={FooterStyle.footer}>
        <span className={FooterStyle.copyright}>© 2022 LUXURY RESIDENCE</span>
        <a className={FooterStyle.privacy} href="">Privacy Policy</a>
    </div>)
}
export default Footer;