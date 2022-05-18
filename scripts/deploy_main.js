const fs = require("fs");
const colors = require("colors");
const { ethers } = require("hardhat");

async function main() {
  // get network
  const [deployer] = await ethers.getSigners();

  //QE token deployment
  const PopElon = await ethers.getContractFactory("PopElon");
  const popElon = await PopElon.deploy("PopElon", "PE", "234", "123123");
  await popElon.deployed();

  console.log("popelon", popElon.address);
}

main()
  .then(() => {
    console.log("complete".green);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
