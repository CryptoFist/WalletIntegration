import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from "viem/chains";

export const config = getDefaultConfig({
    appName: "RainbowKit demo",
    projectId: "WalletIntegration",
    chains: [mainnet],
});
