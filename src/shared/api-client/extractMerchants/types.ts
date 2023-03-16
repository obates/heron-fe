export type ExtractMerchantRequestParams = {
  description: string;
};

type MerchantCategory = {
  code: string;
  description: string;
  slug: string;
};

export type Merchant = {
  categories: Array<MerchantCategory>;
  confidence: number;
  heron_id: string;
  icon_url: string;
  logo_url: string;
  name: string;
  url: string;
};

type PaymentProcessor = {
  heron_id: string;
  icon_url: string;
  logo_url: string;
  name: string;
  url: string;
};

export type ExtractedMerchant = {
  description_clean: string;
  merchant: Merchant;
  payment_processor: PaymentProcessor;
};
