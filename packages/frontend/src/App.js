import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import Greeter from "./contracts/hardhat_contracts.json";

function App() {
  const [buying, buy] = useState();

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function greeting() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // 31337 is the contract in localhost
      const greeter = Greeter[31337].localhost.contracts.Greeter;
      const contract = new ethers.Contract(
        greeter.address,
        greeter.abi,
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
      </header>
    </div>
  );
}

export default App;
