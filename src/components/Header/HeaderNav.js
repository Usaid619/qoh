import Header from "./Header";

function HeaderNav({ headerRef, isScrolled}) {
  return (

      
      <Header
        headerRef={headerRef}
        isScrolled={isScrolled}
      />
    
  );
}

export default HeaderNav;
