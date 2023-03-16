import React from "react";
import { Link, Stack } from "@mui/material";

type Props = {
  onExampleClick: (example: string) => void;
};

const EXAMPLE_DESCRIPTIONS = ["PAYPAL* AMZN Mktp 198748320", "PAYPAL* AMZN Mktp 198748329"];
const ExampleDescriptions: React.FunctionComponent<Props> = (props) => (
  <Stack direction="row" spacing={2}>
    {EXAMPLE_DESCRIPTIONS.map((example) => (
      <Link key={example} onClick={() => props.onExampleClick(example)} color="text.secondary">
        {example}
      </Link>
    ))}
  </Stack>
);

export default ExampleDescriptions;
