import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { Link, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { profileState } from "../../stores/profileState";

export default function TopMenu() {
  const [profile, setProfile] = useRecoilState(profileState);
  const logout = () => {
    setProfile(null);
  };
  return profile ? (
    <Navbar className="bg-base-300">
      <div className="flex-1 ">
        <Button color="ghost" className="normal-case text-xl">
          Opus Classical
        </Button>
      </div>
      <div className="flex-none">
        <Menu horizontal className="p-0">
          <Menu.Item>
            <Link to="/content/countries">Countries</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/content/periods">Periods</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/content/catalogues">Catalogues</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/content/instruments">Instruments</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/content/labels">Labels</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/content/performers">Performers</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/content/composers">Composers</Link>
          </Menu.Item>
        </Menu>
        <Dropdown vertical="end">
          <Button color="ghost" className="avatar" shape="circle">
            <div className="w-10 rounded-full">
              <img alt="avatar" src={profile?.picture} />
            </div>
          </Button>
          <Dropdown.Menu className="w-52 menu-compact bg-base-300">
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  ) : (
    <Navigate to="/auth" replace={true} />
  );
}
