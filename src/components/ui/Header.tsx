import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;

const Header = () => {
  const { push } = useRouter();
  const { role } = getUserInfo();

  const handleLogout = () => {
    removeUserInfo(authKey);
    push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={handleLogout} danger type="text">
          Logout
        </Button>
      ),
    },
  ];

  return (
    <AntHeader style={{ backgroundColor: "white" }}>
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            {role}
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
