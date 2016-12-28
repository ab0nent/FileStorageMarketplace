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

                console.log(coinbase);
                console.log(appConfig.abi);
                // var balance = web3.eth.getBalance(coinbase).toNumber();
                //
                // console.log(coinbase);
                // console.log(balance);
                // console.log(web3.personal.unlockAccount(coinbase, password, 1000));
                // console.log(web3.eth.accounts);

                var contract = web3.eth.contract(appConfig.abi).at(appConfig.contractAddress);
                //
                console.log(contract);
                //
                //
                // function setSalary(newSalary) {
                //     return contract.setSalary(newSalary, {from: coinbase, value: web3.toWei(0, 'ether')})
                // }
                //
                // function getSalary() {
                //     return contract.getSalary();
                // }
                //
                // function getTotal() {
                //     return contract.getTotal();
                // }
                //
                // console.log(getSalary());
                // console.log(getTotal());
                // console.log(setSalary(50));
                // console.log(getSalary());
                // console.log(getTotal());
            }

        ]
    });
