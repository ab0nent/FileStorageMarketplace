angular.module('core.config')
    .service('appConfig', function () {
        this.abi = [
            {
                "constant": true,
                "inputs": [],
                "name": "getSalary",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getTotal",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "Kill",
                "outputs": [],
                "payable": false,
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newSalary",
                        "type": "uint256"
                    }
                ],
                "name": "setSalary",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "payments",
                "outputs": [
                    {
                        "name": "paymentOwner",
                        "type": "address"
                    },
                    {
                        "name": "salary",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "type": "function"
            }
        ];
        this.contractAddress = '0x73403595cF2d95640e9d6eB4C6fa32E03b262D6F';
        this.httpProvider = 'http://127.0.0.1:8545/';
    });