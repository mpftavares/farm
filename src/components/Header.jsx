import { useState } from "react";
import Hamburguer from "./Hamburguer";
import Nav from "./Nav";


export default function Header() {

	const [showNav, setShowNav] = useState(false);
  const [burguerIcon, setBurguerIcon] = useState('menu')

  
  const hamburguerIcon = showNav ? setBurguerIcon('close') : setBurguerIcon('menu') ;

  const handleHamburguerClick = () => {
    setShowNav(!showNav);
  }

  return (
<header>
      <Hamburguer onClick={handleHamburguerClick} icon={hamburguerIcon}/>
      {showNav ? <Nav /> : <></>}
</header>
  )
}
