const { expect } = require("chai");

describe("NFT", function() {
  it("Should return the right name and symbol", async function() {
    const NFT = await hre.ethers.getContractFactory("CryptoToken");
    const nft = await NFT.deploy("Crypto Token", "CTK");
    await nft.deployed();
    expect(await nft.name()).to.equal("Crypto Token");
    expect(await nft.symbol()).to.equal("CTK");
  });
});
