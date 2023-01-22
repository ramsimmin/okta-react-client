import { Menu } from "antd";
import { HomeOutlined, DashboardOutlined, LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

function SideMenu() {
    const navigate = useNavigate();
    const { oktaAuth } = useOktaAuth();
    const logout = async () => oktaAuth.signOut();

    return (
        <div>
            <Menu theme="dark"
                onClick={
                    ({ key }) => {
                        if (key != "/logout") {
                            navigate(key);
                        }
                    }
                }
                items={[
                    { label: "Home", key: "/", icon: <HomeOutlined /> },
                    { label: "Dashboard", key: "/dashboard", icon: <DashboardOutlined /> },
                    { label: "Logout", key: "/logout", onClick: logout, icon: <LogoutOutlined /> }
                ]}>
            </Menu>
        </div>
    );
}

export default SideMenu;