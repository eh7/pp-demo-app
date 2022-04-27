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

  mapping(address => uint) public staked;
  mapping(address => uint) public stakedTime;
  mapping(address => uint) public unStaked;
  mapping(address => uint) public unStakedTime;

  struct StakeRecord {
    address wallet;
    uint staked;
    uint stakedTime;
    uint unStaked;
    uint unStakedTime;
  }

  constructor(address _token) {
    token = IERC20(_token);
  }

  event Debug(
    address wallet,
    uint staked,
    uint stakedTime,
    uint unStaked,
    uint unStakedTime
  );

  event Staked(
    address wallet,
    uint amount,
    uint time
  );

  event UnStaked(
    address wallet,
    uint amount,
    uint time
  );

  modifier isStakeValid (uint _amount) {
    require(_amount > 9, "stake should be more than 9");
    require(_amount < 1000001, "stake should be less than 1,000,001");
    require(token.balanceOf(msg.sender) >= _amount, "balance of msg.sender should be equal or more than amount to stake");
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
    require(token.transferFrom(msg.sender,address(this), _amount), "transfer Failed");

    wallet.push(msg.sender);
    staked[msg.sender] = _amount;
    stakedTime[msg.sender] = block.timestamp;
    emit Staked(
      msg.sender,
      _amount,
      stakedTime[msg.sender] 
    );
  }

  function unstake ()
    public 
    isActive
  {
    uint amount =  staked[msg.sender];

    require(token.transfer(msg.sender, amount), "transfer Failed");

    unStakedTime[msg.sender] = block.timestamp;
    staked[msg.sender] = 0;
    unStaked[msg.sender] = amount;

    emit UnStaked(
      msg.sender,
      amount,
      unStakedTime[msg.sender] 
    );
  }

  function getWallets () public onlyOwner
    returns (StakeRecord[] wallets) 
    // returns (address[] memory wallets) 
  {
    uint length = wallet.length;
    StakeRecord[2] memory walletStakeRecord;
    // mapping(uint => StakeRecord) memory walletsStakeRecord;
    for (uint i = 0; i < wallet.length; i++) {
      emit Debug(
        wallet[i],
        staked[wallet[i]],
        stakedTime[wallet[i]],
        unStaked[wallet[i]],
        unStakedTime[wallet[i]]
      );
//    uint staked;
//    uint stakedTime;
//    uint unStaked;
//    uint unStakedTime;

//      StakeRecord(
      walletStakeRecord[i] = StakeRecord(
        wallet[i],
        staked[wallet[i]],
        stakedTime[wallet[i]],
        unStaked[wallet[i]],
        unStakedTime[wallet[i]]
      );
    //  wallets[i] = wallet[i];
    }

    return walletStakeRecord;
    // return wallet;
    //emit Activate();

    //staked[msg.sender] = _amount;
    //stakedTime[msg.sender] = block.timestamp;
    //emit Staked(
    //  msg.sender,
    //  _amount
    //);
  }

  function activate () public onlyOwner {
    active = true;
  }

  function deActivate () public onlyOwner {
    active = false;
  }

}
