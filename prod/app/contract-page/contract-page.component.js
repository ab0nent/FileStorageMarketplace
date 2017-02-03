angular.module('contractPage')
    .component('contractPage', {
        templateUrl: 'app/contract-page/contract-page.template.html',
        controller: ['appConfig',
            function ContractPageController(appConfig) {

                var web3 = new Web3();

                web3.setProvider(new web3.providers.HttpProvider(appConfig.httpProvider));

                if (!web3.isConnected()) {
                    alert('Node not found. Provide correct RPC server.')
                }

                var coinbase = web3.eth.coinbase;
                var contract = web3.eth.contract(appConfig.abi).at(appConfig.contractAddress);
                var self = this;

                self.gboResult = {  //result of getBuyOrder function
                    id: '',
                    DO: '',
                    volumeGB: '',
                    pricePerGB: '',
                    weiInitialAmount: ''
                };

                self.unlockAccount = unlockAccount;
                self.getBuyOrder = getBuyOrder;
                self.createBuyOrder = createBuyOrder;

                function getBuyOrder(index) {
                    var gboArr = contract.getBuyOrder(index);
                    self.gboResult.id = parseFloat(gboArr[0]);
                    self.gboResult.DO = gboArr[1];
                    self.gboResult.volumeGB = parseFloat(gboArr[2]);
                    self.gboResult.pricePerGB = parseFloat(gboArr[3]);
                    self.gboResult.weiInitialAmount = parseFloat(gboArr[4]);
                }

                function createBuyOrder(cbo) {
                    var transactionId = contract
                        .createBuyOrder
                        .sendTransaction(
                            cbo.volumeGB,
                            cbo.pricePerGB,
                            {from: coinbase, value: web3.toWei(0, 'ether'), gas: 1000000}
                        );
                    console.log(transactionId);
                }

                function unlockAccount(pwd) {
                    web3.personal.unlockAccount(coinbase, pwd, 10000);
                }
            }
        ]
    });
