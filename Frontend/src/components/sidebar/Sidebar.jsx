import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col w-[200px] md:w-[300px] overflow-hidden">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
