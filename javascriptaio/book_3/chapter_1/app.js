import GoogleLogo from "./GoogleLogo";
import SearchBox from "./SearchBox";
import SignInButton from "./SignInButton";
import SearchResults from "./SearchResults";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function App() {
  return (
    <div>
      <div>
        <GoogleLogo />
        <SearchBox />
        <SignInButton />
      </div>
      <NavBar />
      <div>
        <SearchResults />
        <SideBar />
      </div>
    </div>
  );
}
