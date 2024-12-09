import { useSDK } from "@metamask/sdk-react";
import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
    const { sdk } = useSDK();
    const connectMetamask = async () => {
        try {
            const accounts = await sdk.connect();
            console.log(accounts);
        } catch (error) {}
    };

    return (
        <div className="App">
            <div className="div-integration">
                <button
                    className="btn-connect"
                    onClick={() => connectMetamask()}
                >
                    Connect Wallet
                </button>
            </div>
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
                        openConnectModal();
                    };

                    const ready = mounted && authenticationStatus !== "loading";
                    const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus ||
                            authenticationStatus === "authenticated");
                }}
            </ConnectButton.Custom>
        </div>
    );
}

export default App;
