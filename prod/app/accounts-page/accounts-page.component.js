angular.module('accountsPage')
    .component('accountsPage', {
        templateUrl: 'app/accounts-page/accounts-page.template.html',
        controller: ['appConfig',
            function AccountsPageController(appConfig) {
                var web3 = new Web3();
                web3.setProvider(new web3.providers.HttpProvider(appConfig.httpProvider));

                if (!web3.isConnected()) {
                    alert('Node not found. Provide correct RPC server.')
                }

                this.accounts = web3.eth.accounts;

                var self = this;

                self.getTotalBalance = getTotalBalance;
                self.getAccountBalance = getAccountBalance;

                function getTotalBalance(accounts) {
                    var totalBalance = 0;
                    for(var i = 0; i < accounts.length; i++) {
                        var accountBalance = web3.fromWei(web3.eth.getBalance(accounts[i]));
                        totalBalance += parseFloat(accountBalance);
                    }
                    return totalBalance;
                }

                function getAccountBalance(account) {
                    return parseFloat(web3.fromWei(web3.eth.getBalance(account)));
                }

                // console.log(getTotalBalance(this.accounts));
                // console.log(getAccountBalance(this.accounts[0]));
                // console.log(getAccountBalance(this.accounts[1]));
            }
        ]
    });
