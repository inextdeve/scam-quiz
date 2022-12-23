const Nav = ({children}) => {
  return (
    <>
    <nav className="flex justify-center space-x-4 bg-black">
      <div className="py-2">
        <img width="30px" src="./images/apple-icon.png" />
      </div>
    </nav>
    {children}
    </>
  );
};
export default Nav;
