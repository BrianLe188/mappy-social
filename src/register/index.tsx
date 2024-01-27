import React from "react";
import { Page, Input, Button, Text, Box, useNavigate } from "zmp-ui";

export default function Register() {
  const navigate = useNavigate();

  return (
    <Page className="register" name="Register">
      <Box m={2} p={2} className="bg-white rounded-md">
        <Input type="text" placeholder="Tên của bạn" />
        <Input type="text" placeholder="your-email@gmail.com" />
        <Input type="password" placeholder="********" />
        <Box mt={2}>
          <Button className="w-full">Đăng ký</Button>
        </Box>
        <Text size="small" className="text-center mt-5">
          Đã có tài khoản?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-bold"
          >
            Đăng nhập
          </span>
        </Text>
      </Box>
    </Page>
  );
}
