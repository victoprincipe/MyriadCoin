const Myriad = artifacts.require("Myriad");

module.exports = function (deployer) {
  deployer.deploy(Myriad, 100000000);
};
