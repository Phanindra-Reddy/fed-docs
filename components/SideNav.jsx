import { sideNavData } from "../utils/sideNavData";
import FolderStruct from "./FolderStruct";

function SideNav() {
  return (
    <div className="dark:bg-gray-700 h-screen">
      <div className="dark:bg-gray-700 dark:text-white">
        <>
          {sideNavData?.map((data) => (
            <FolderStruct key={data.id} data={data} />
          ))}
        </>
      </div>
    </div>
  );
}

export default SideNav;
