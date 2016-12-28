angular.module('contractPage')
    .component('contractPage', {
        templateUrl: 'app/contract-page/contract-page.template.html',
        controller: ['appConfig', '$interval',
            function ContractPageController(appConfig, $interval) {

                var web3 = new Web3();

                web3.setProvider(new web3.providers.HttpProvider(appConfig.httpProvider));

                if (!web3.isConnected()) {
                    alert('Node not found. Provide correct RPC server.')
                }

                var coinbase = web3.eth.coinbase;
                var contract = web3.eth.contract(appConfig.abi).at(appConfig.contractAddress);

                var self = this;

                self.setSalary = setSalary;
                $interval(function () {
                    self.salary = getSalary();
                    self.total = getTotal();
                },3000);

                function setSalary(account) {
                    unlockAccount(account.password);
                    contract.setSalary(account.newSalary, {from: coinbase, value: web3.toWei(0, 'ether')});
                }

                function getSalary() {
                    return contract.getSalary();
                }

                function getTotal() {
                    return contract.getTotal();
                }

                function unlockAccount(pwd) {
                    web3.personal.unlockAccount(coinbase, pwd, 1000);
                }
            }

        ]
    });
