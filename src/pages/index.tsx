import React, { useState } from "react";
import { Box, Link, Paper, Stack, SxProps, TextField, Typography } from "@mui/material";
import apiClient from "@/shared/api-client";
import { ExtractedMerchant } from "@/shared/api-client/extractMerchants/types";
import { LoadingButton } from "@mui/lab";
import ExtractedMerchantRow from "@/components/ExtractedMerchantRow";
import ExampleDescriptions from "@/components/ExampleDescriptions";
import { sleep } from "@/shared/utils/async";

type Props = {};

const IndexPage: React.FunctionComponent<Props> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [extractedMerchant, setExtractedMerchant] = useState<ExtractedMerchant | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const [userDescription, setUserDescription] = useState("");

  const fetchExtractedMerchant = async (description: string) => {
    setIsLoading(true);
    setErrorMessage(undefined);
    await sleep(1000); // Fake a longer network connection
    const result = await apiClient.extractMerchants({ description });

    if (result.success && result.data) {
      setExtractedMerchant(result.data);
    } else {
      setErrorMessage(result.errorMessage);
    }
    setIsLoading(false);
  };

  const onExtractClick = () => {
    fetchExtractedMerchant(userDescription);
  };

  const onExampleClick = (example: string) => {
    setUserDescription(example);
    fetchExtractedMerchant(example);
  };

  return (
    <Box component="main" sx={styles.main}>
      <Paper sx={styles.paper}>
        <Typography variant="h5">Merchant Extract Demo</Typography>
        <Stack direction="row" sx={styles.input}>
          <TextField
            label="Enter A Raw Bank Transaction"
            variant="outlined"
            fullWidth
            value={userDescription}
            onChange={(e) => setUserDescription(e.target.value)}
          />
          <LoadingButton onClick={onExtractClick} loading={isLoading}>
            Extract
          </LoadingButton>
        </Stack>
        <Typography variant="body2">Or, choose from an example:</Typography>
        <ExampleDescriptions onExampleClick={onExampleClick} />
        {!!errorMessage && (
          <Typography variant="body2" color="error">
            {errorMessage}
          </Typography>
        )}
        <ExtractedMerchantRow isLoading={isLoading} extractedMerchant={extractedMerchant} />
      </Paper>
    </Box>
  );
};

const styles: Record<string, SxProps> = {
  main: {
    height: "100vh",
  },
  paper: {
    width: "50vw",
    marginX: "auto",
    marginY: 3,
    padding: 3,
  },
  input: {
    paddingTop: 3,
    paddingBottom: 2,
  },
};

export default IndexPage;
