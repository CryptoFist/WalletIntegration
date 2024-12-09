import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from "viem/chains";

export const config = getDefaultConfig({
    appName: "RainbowKit demo",
    projectId: "5f7ad8eb164baabb82e245bf09ba1202",
    chains: [mainnet],
});
