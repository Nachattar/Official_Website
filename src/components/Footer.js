

function Footer(props) {
  return (
    <div id={props.id} className="w3-bottom w3-black" >
    <p  className ="w3-center">Copyright © 2022 Nachattar Consultancy Private Limited
    <a className ="w3-left" href={props.gitLink}>
    <img  src={props.githubLogo} alt="Github" />
    </a>
    </p>
  </div>
  );
}
export default Footer;
