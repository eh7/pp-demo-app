import React, { useState, useEffect } from 'react';
import { useTable } from "react-table";
import {
	  BigNumber,
	  ethers,
	  utils,
} from "ethers";
import {
	  Button,
	  Card,
	  Col,
	  Form,
	  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  contractTokenAddress,
  getAddress,
  getBalance,
} from "../../services/web3Token";

const Token = () => {

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function loadBalance () {
      const address = await getAddress();
      const balance = await getBalance();
      //console.log(address,  balance);
      setBalance(
        balance
      );
    }
    loadBalance();
  }, [])

  return (
    <div className="container mt-4 p-5 text-primary">

      <Card border="secondary" className="text-secondary">
        <Card.Header> Token {contractTokenAddress} </Card.Header>
        Balance: {balance} for {balance}
      </Card>

    </div>
  );
}

export default Token;
