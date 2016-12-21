angular.module('mainPage').component('mainPage', {
    templateUrl: 'app/main-page/main-page.template.html',
    controller: ['$scope',
        function MainPageController($scope) {

            var contractAddress = '0x73403595cF2d95640e9d6eB4C6fa32E03b262D6F';
            var password = "DctvG1pltw1";

            var web3 = new Web3();
            var httpProvider = 'http://10.0.2.2:8545/';
            web3.setProvider(new web3.providers.HttpProvider(httpProvider));

            if (!web3.isConnected()) {
                console.log('!!! node not found !!!')
            }

            var coinbase = web3.eth.coinbase;
            $scope.coinbase = coinbase;



            function checkAllBalances() {
                var totalBal = 0;
                for (var acctNum in web3.eth.accounts) {
                    var acct = web3.eth.accounts[acctNum];
                    var acctBal = web3.fromWei(web3.eth.getBalance(acct), "ether");
                    totalBal += parseFloat(acctBal);
                    console.log("  eth.accounts[" + acctNum + "]: \t" + acct + " \tbalance: " + acctBal + " ether");
                }
                console.log("  Total balance: " + totalBal + " ether");
            }

            checkAllBalances();
















            var balance = web3.eth.getBalance(coinbase).toNumber();

            console.log(coinbase);
            console.log(balance);
            console.log(web3.personal.unlockAccount(coinbase, password, 1000));
            console.log(web3.eth.accounts);

            var abi = [{
                "constant": true,
                "inputs": [],
                "name": "getSalary",
                "outputs": [{"name": "", "type": "uint256"}],
                "payable": false,
                "type": "function"
            }, {
                "constant": true,
                "inputs": [],
                "name": "getTotal",
                "outputs": [{"name": "", "type": "uint256"}],
                "payable": false,
                "type": "function"
            }, {
                "constant": false,
                "inputs": [],
                "name": "Kill",
                "outputs": [],
                "payable": false,
                "type": "function"
            }, {
                "constant": false,
                "inputs": [{"name": "newSalary", "type": "uint256"}],
                "name": "setSalary",
                "outputs": [{"name": "", "type": "bool"}],
                "payable": true,
                "type": "function"
            }, {
                "constant": true,
                "inputs": [{"name": "", "type": "address"}],
                "name": "payments",
                "outputs": [{"name": "paymentOwner", "type": "address"}, {"name": "salary", "type": "uint256"}],
                "payable": false,
                "type": "function"
            }]

            var contract = web3.eth.contract(abi).at(contractAddress);

            console.log(contract);




            function setSalary(newSalary) {
                return contract.setSalary(newSalary, {from: coinbase,value:web3.toWei(0,'ether')})
            }

            function getSalary() {
                return contract.getSalary();
            }

            function getTotal() {
                return contract.getTotal();
            }

            console.log(getSalary());
            console.log(getTotal());
            // console.log(setSalary(50));
            // console.log(getSalary());
            // console.log(getTotal());
        }
    ]
});
