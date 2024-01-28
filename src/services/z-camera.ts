import { requestCameraPermission } from "zmp-sdk/apis";

async function requestCamera() {
  try {
    const { userAllow, message } = await requestCameraPermission({});
    if (userAllow) {
      // được phép sử dụng camera
    }
  } catch (error) {
    // xử lý khi gọi api thất bại
    console.log(error);
  }
}

const cameraService = {
  requestCamera,
};

export default cameraService;
