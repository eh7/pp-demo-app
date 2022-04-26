// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20 {
  constructor(uint256 initialSupply) ERC20("Token", "TKN") {
    _mint(msg.sender, initialSupply);
  }
}

contract Staking is Ownable {

  IERC20 public token;

  bool public active = false;

  address[] wallet;

  mapping(address => uint) staked;
  mapping(address => uint) stakedTime;
  mapping(address => uint) unStakedTime;

  constructor(address _token) {
    token = IERC20(_token);
  }

/*
  struct Stake {
    address wallet,
    uint stakedAmount,
    uint stakedTime,
    uint unStakedTime,
  }
*/

  event Staked(
    address wallet,
    uint amount
  );

  event UnStaked(
    address wallet,
    uint amount
  );

  modifier isStakeValid (uint _amount) {
    require(token.balanceOf(msg.sender) > 9, "stake should be more than 9");
    require(_amount > 9, "stake should be more than 9");
    require(_amount < 1000001, "stake should be less than 1,000,001");
    _;
  }

  modifier isActive () {
    require(active == true, "Staking Contract is not active");
    _;
  }

  function stake (uint _amount)
    public
    isActive
    isStakeValid(_amount)
  {
    // IERC20 paymentToken = IERC20(token);
    // uint256 amountToPay;
    // require(paymentToken.allowance(msg.sender, address(this)) >= amountToPay,"Insuficient Allowance");
    // require(paymentToken.transferFrom(msg.sender,address(this),amountToPay),"transfer Failed");

    staked[msg.sender] = _amount;
    stakedTime[msg.sender] = block.timestamp;
    emit Staked(
      msg.sender,
      _amount
    );
  }

  function unstake ()
    public 
    isActive
  {
    // IERC20 paymentToken = IERC20(token);
    // uint256 amountToPay;
    // require(paymentToken.allowance(address(this), msg.sender) >= amountToPay,"Insuficient Allowance");
    // require(paymentToken.transferFrom(msg.sender,address(this),amountToPay),"transfer Failed");

    uint amount =  staked[msg.sender];
    unStakedTime[msg.sender] = block.timestamp;
    emit Staked(
      msg.sender,
      amount
    );
  }

  function getWallets () public onlyOwner
    // returns (address wallets) 
  {
    //emit Activate();
    // return wallet;
  }

  function activate () public onlyOwner {
    active = true;
  }

  function deActivate () public onlyOwner {
    active = false;
  }

}
