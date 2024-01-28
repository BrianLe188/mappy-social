import React from "react";
import { BottomNavigation as ZBottomNavigation, Icon } from "zmp-ui";
import services from "../../services";

export default function BottomNavigation() {
  async function handleOpenCamera() {
    try {
      const res = await services.cameraService.requestCamera();
    } catch (error) {}
  }

  return (
    <ZBottomNavigation className="relative z-40">
      <ZBottomNavigation.Item
        key="chat"
        label="Tin Nhắn"
        icon={<Icon icon="zi-chat" />}
        activeIcon={<Icon icon="zi-chat-solid" />}
      />
      <ZBottomNavigation.Item
        label="Danh bạ"
        key="contact"
        icon={<Icon icon="zi-call" />}
        activeIcon={<Icon icon="zi-call-solid" />}
      />
      <ZBottomNavigation.Item
        onClick={handleOpenCamera}
        label=""
        key="camera"
        icon={
          <Icon
            icon="zi-camera"
            className="text-white bg-blue-600 p-6 flex justify-center items-center rounded-full"
          />
        }
        className="relative bottom-9 z-50 right-[0.625rem]"
        activeIcon={
          <Icon
            icon="zi-pause-solid"
            className="text-white bg-blue-600 p-6 flex justify-center items-center rounded-full"
          />
        }
      />
      <ZBottomNavigation.Item
        key="timeline"
        label="Nhật ký"
        icon={<Icon icon="zi-clock-1" />}
        activeIcon={<Icon icon="zi-clock-1-solid" />}
      />
      <ZBottomNavigation.Item
        key="me"
        label="Cá nhân"
        icon={<Icon icon="zi-user" />}
        activeIcon={<Icon icon="zi-user-solid" />}
      />
    </ZBottomNavigation>
  );
}
