import React from "react";
import { Chip, Divider, Stack, SxProps, Tooltip } from "@mui/material";
import { ExtractedMerchant } from "@/shared/api-client/extractMerchants/types";
import Merchant, { MerchantSkeleton } from "@/components/Merchant";

type Props = {
  extractedMerchant?: ExtractedMerchant;
  isLoading: boolean;
};

const ExtractedMerchantRow: React.FunctionComponent<Props> = (props) => {
  const { merchant, payment_processor } = props.extractedMerchant || {};

  return (
    <>
      {(props.isLoading || !!merchant) && <Divider sx={styles.divider}>Merchant Details</Divider>}
      {props.isLoading && <MerchantSkeleton />}
      {!!merchant && !props.isLoading && <Merchant name={merchant.name} logoUrl={merchant.icon_url} url={merchant.url} />}

      {!props.isLoading && !!merchant && (
        <Stack direction="row" gap={0.5} overflow="scroll" marginTop={1.5}>
          {merchant.categories.map((category) => (
            <Tooltip key={category.code} title={`Code: ${category.code}. Slug: ${category.slug}`}>
              <Chip label={category.description} />
            </Tooltip>
          ))}
        </Stack>
      )}

      {(props.isLoading || !!payment_processor) && <Divider sx={styles.divider}>Payment Processor Details</Divider>}
      {props.isLoading && <MerchantSkeleton />}
      {!!payment_processor && !props.isLoading && (
        <Merchant name={payment_processor.name} logoUrl={payment_processor.icon_url} url={payment_processor.url} />
      )}
    </>
  );
};

const styles: Record<string, SxProps> = {
  divider: {
    marginTop: 3,
    marginBottom: 1,
    color: "text.secondary",
  },
};

export default ExtractedMerchantRow;
