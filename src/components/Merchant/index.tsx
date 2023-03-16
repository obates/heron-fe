import React from "react";
import { Avatar, Link, Stack, SxProps, Typography, Skeleton } from "@mui/material";

type Props = {
  name: string;
  logoUrl: string;
  url: string;
};

const Merchant: React.FunctionComponent<Props> = (props) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Avatar sx={styles.logo} src={props.logoUrl} />
      <Stack gap={0.5}>
        <Typography>{props.name}</Typography>
        <Link href={props.url} target="_blank" variant="body2" color="text.secondary">
          {props.url}
        </Link>
      </Stack>
    </Stack>
  );
};

export const MerchantSkeleton: React.FunctionComponent = () => (
  <Stack direction="row" alignItems="center" gap={1}>
    <Skeleton sx={styles.logo} variant="circular" />
    <Stack gap={0.5}>
      <Skeleton variant="rounded" width={150} />
      <Skeleton variant="rounded" width={250} />
    </Stack>
  </Stack>
);

const styles: Record<string, SxProps> = {
  logo: {
    width: 40,
    height: 40,
  },
};

export default Merchant;
