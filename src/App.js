import "./App.css";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

function App() {
  const wallet = useWallet();

  useEffect(() => {
    wallet.select(PhantomWalletName);
  }, [wallet]);

  async function connectWallet() {
    try {
      await wallet.connect();
      console.log("walelt is connected");
    } catch (error) {
      console.log("walelt is not connected");
      console.log("error ---", error);
    }
  }
  return (
    <div className="App">
      <button onClick={connectWallet}>connect wallet</button>
    </div>
  );
}

export default App;
