import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useDisconnect } from "wagmi";

function App() {
    const { disconnect } = useDisconnect();
    const [address, setAddress] = useState("");
    const [isConnected, setConnected] = useState(false);
    return (
        <div className="App">
            <ConnectButton.Custom>
                {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    connectModalOpen,
                    mounted,
                }) => {
                    const handleWalletConnect = () => {
                        if (isConnected == false) {
                            openConnectModal();
                        } else {
                            disconnect();
                        }
                    };
                    const ready = mounted && authenticationStatus !== "loading";
                    const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus ||
                            authenticationStatus === "authenticated");

                    setConnected(connected === true ? true : false);
                    setAddress(connected === true ? account.address : "");

                    if (connected === true) {
                        return (
                            <div>
                                <button onClick={() => handleWalletConnect()}>
                                    Disconnect Wallet
                                </button>
                                <p class="txt-address">{address}</p>
                            </div>
                        );
                    } else {
                        return (
                            <div>
                                <button onClick={() => handleWalletConnect()}>
                                    Connect Wallet
                                </button>
                                <p class="txt-address">{address}</p>
                            </div>
                        );
                    }
                }}
            </ConnectButton.Custom>
        </div>
    );
}

export default App;
