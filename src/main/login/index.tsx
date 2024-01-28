import React from "react";
import { Page, Input, Button, Text, Box, useNavigate } from "zmp-ui";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Page className="login" name="Login">
      <Box m={2} p={2} className="bg-white rounded-md">
        <Input type="text" placeholder="your-email@gmail.com" />
        <Input type="password" placeholder="********" />
        <Box mt={2}>
          <Button className="w-full">Đăng nhập</Button>
        </Box>
        <Text size="small" className="text-center mt-5">
          Chưa có tài khoản?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-bold"
          >
            Đăng ký
          </span>
        </Text>
      </Box>
    </Page>
  );
}
