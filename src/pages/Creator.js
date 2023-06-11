import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState, useEffect  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getICOContract, connectToOtherContracts, buy, withdrawETH, withdrawToken, updatePrice  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const icoContract = getICOContract(bunzz);

    const [tokenAddress, setTokenAddress] = useState("");
  
    const [price, setPrice] = useState();

    const [buyAmounts, setBuyAmounts] = useState();



    const[retrieveAmount, setRetrieveAmount] = useState(0);

 

    const [pendingConnectToOtherContracts, setPendingConnectToOtherContracts] = useState(false);
    const [pendingBuy, setPendingBuy] = useState(false);
    const [pendingUpdatePrice, setPendingUpdatePrice] = useState(false);
    const [pendingWithdrawETH, setPendingWithdrawETH] = useState(false);
    const [pendingWithdrawTokens, setPendingWithdrawTokens] = useState(false);

  

  
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Token address</Form.Label>
                            <Form.Control type="email" placeholder="Enter ID" value={tokenAddress} onChange={(val) => setTokenAddress(val.target.value)} />
                        </Form.Group>
                            {!pendingConnectToOtherContracts ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingConnectToOtherContracts(true);
                                try {
                                    let txHash;
                                    txHash = await connectToOtherContracts(
                                        icoContract,
                                        tokenAddress,
                                        account,
                                    );
                                    console.log(txHash);
                                    setPendingConnectToOtherContracts(false);
                                } catch (e) {
                                    console.log(e);
                                    setPendingConnectToOtherContracts(false);
                                }
                            }}>
                               Connect To Other Contracts
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Connect To Other Contracts
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Price</Form.Label>
                            <Form.Control type="email" placeholder="Enter price" value={price} onChange={(val) => setPrice(val.target.value)} />
                           
                        </Form.Group>

                        {!pendingUpdatePrice ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingUpdatePrice(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await updatePrice(
                                        icoContract,
                                        price,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingUpdatePrice(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingUpdatePrice(false);
                                    
                                }
                            }}>
                                UpdatePrice
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} UpdatePrice
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input ETH Amounts</Form.Label>
                            <Form.Control type="email" placeholder="Enter amounts" value={buyAmounts} onChange={(val) => setBuyAmounts(val.target.value)} />
                        </Form.Group>

                        {!pendingBuy ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingBuy(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await buy(
                                        icoContract,
                                        buyAmounts,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingBuy(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingBuy(false);
                                    
                                }
                            }}>
                                Buy
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Buy
                            </Button>
                        }
                       
                        {!pendingWithdrawETH ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingWithdrawETH(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await withdrawETH(
                                        icoContract,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingWithdrawETH(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingWithdrawETH(false);
                                    
                                }
                            }}>
                                WithdrawETH
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} WithdrawETH
                            </Button>
                        }

                    </Form>
                    

                   

                        
                </Col>
            </Row>
        </Container>
    )
}

export default Creator;