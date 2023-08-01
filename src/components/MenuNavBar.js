import { useEffect, useRef, useState } from "react";
import ListLinkMobile from "./ListLinkMobile";

export function MenuNavBar({links}) {

  const [ativo, setAtivo] = useState(false)
  const menuRef = useRef(null)

  const handleClick = () =>{
    setAtivo(!ativo)
  }

  useEffect(()=>{
    const handleDocumentClick = (event) =>{

      if(menuRef.current && !menuRef.current.contains(event.target)){
        setAtivo(false)
      }
    }

    document.addEventListener('click', handleDocumentClick)
  
    return () =>{
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  
  

  return (
    <div className="sm:hidden" onClick={handleClick} ref={menuRef}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        style={{ fill: "rgba(0, 0, 0, .8)", transform: "none", msFilter: "" }}
        
      >
        <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
      </svg>
      { ativo && <ListLinkMobile links={links}/>}
    </div>
  );
}
