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

const Home = () => {

  return (
    <div className="container mt-4 p-5 text-primary">

      <Card border="secondary" className="text-secondary">
        <Card.Header>Home</Card.Header>
      </Card>

    </div>
  );
}

export default Home;
