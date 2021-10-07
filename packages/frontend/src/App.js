import "./App.css";
import { ethers } from "ethers";
import MyNetwork from "./contracts/contract-address.json";
import Greeter from "./contracts/hardhat-contracts.json";

function App() {
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function greeting() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        MyNetwork.address,
        Greeter.abi,
        provider
      );
      try {
        const data = await contract.greet();
        console.log(`Output: ${data}`);
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    }
  }

  return (
    <div className="App">
      <header className="App-Header">
        <button onClick={greeting}>Greeting</button>
        <button onClick={requestAccount}>Connect</button>
      </header>
    </div>
  );
}

export default App;
