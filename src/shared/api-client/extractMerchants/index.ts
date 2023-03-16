import { APIResponse } from "@/shared/api-client/types";
import apiUrls from "@/shared/api-client/apiUrls";
import { ExtractMerchantRequestParams, ExtractedMerchant } from "./types";

const extractMerchants = async (params: ExtractMerchantRequestParams): Promise<APIResponse<ExtractedMerchant>> => {
  try {
    const body = JSON.stringify(params);
    const headers = { "Content-Type": "application/json" };
    const response = await fetch(apiUrls.EXTRACT_MERCHANTS, { method: "POST", body, headers });
    const data = (await response.json()) as ExtractedMerchant; // TODO: this should be made safe
    return { success: response.ok, data: data };
  } catch (e) {
    return { success: false, errorMessage: "Something went wrong. Please try again" };
  }
};

export default extractMerchants;
