import React from "react";
import { Page, Input, Button } from "zmp-ui";

export default function HomePage() {
  return (
    <Page className="login">
      <div className="p-2 m-2 bg-white rounded-md">
        <Input type="text" placeholder="your-email@gmail.com" />
        <Input type="password" placeholder="********" />
        <Button>Đăng nhập</Button>
      </div>
    </Page>
  );
}
