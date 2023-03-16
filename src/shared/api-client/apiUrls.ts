import process from "process";

const BASE_URL = process.env.NEXT_PUBLIC_ENDPOINT_URL;

const apiUrls = {
  EXTRACT_MERCHANTS: BASE_URL + "/merchants/extract/heron_hometask",
};

export default apiUrls;
