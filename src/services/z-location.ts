import { getLocation } from "zmp-sdk/apis";

async function requestLocation() {
  try {
    const { token, latitude, longitude, provider } = await getLocation({});
    return {
      token,
      latitude,
      longitude,
      provider,
    };
  } catch (error) {
    // xử lý khi gọi api thất bại
    console.log(error);
  }
}

const locationService = {
  requestLocation,
};

export default locationService;
