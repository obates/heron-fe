import "@testing-library/jest-dom";
import ExtractedMerchantRow from "@/components/ExtractedMerchantRow/index";
import { render, fireEvent, screen } from "@testing-library/react";
import { ExtractedMerchant } from "@/shared/api-client/extractMerchants/types";

const extractedMerchantFixture: ExtractedMerchant = {
  merchant: {
    name: "Merchant Name",
    categories: [],
    confidence: 1,
    heron_id: "1",
    icon_url: "",
    url: "",
    logo_url: "",
  },
  description_clean: "hello",
  payment_processor: {
    heron_id: "1",
    icon_url: "",
    logo_url: "",
    name: "Payment Processor",
    url: "",
  },
};

describe("ExtractedMerchantRow", () => {
  test("renders the merchant name and payment processor name", () => {
    render(<ExtractedMerchantRow extractedMerchant={extractedMerchantFixture} isLoading={false} />);
    expect(screen.getByText(extractedMerchantFixture.merchant.name)).toBeInTheDocument();
    expect(screen.getByText(extractedMerchantFixture.payment_processor.name)).toBeInTheDocument();
  });
});
