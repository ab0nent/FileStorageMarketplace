angular.module('core.config')
    .service('appConfig', function () {
        this.abi = [{
            "constant": false,
            "inputs": [{"name": "storageContractIndex", "type": "uint256"}, {
                "name": "storageContractID",
                "type": "uint256"
            }],
            "name": "refillStorageContract",
            "outputs": [],
            "payable": true,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "orderIndex", "type": "uint256"}, {
                "name": "orderID",
                "type": "uint256"
            }, {"name": "orderType", "type": "uint256"}, {"name": "IPAndPort", "type": "string"}],
            "name": "createStorageContract",
            "outputs": [{"name": "newStorageContractID", "type": "uint256"}],
            "payable": true,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "volumeGB", "type": "uint256"}, {"name": "pricePerGB", "type": "uint256"}],
            "name": "createBuyOrder",
            "outputs": [],
            "payable": true,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "sellOrderIndex", "type": "uint256"}],
            "name": "getSellOrder",
            "outputs": [{"name": "id", "type": "uint256"}, {"name": "DSO", "type": "address"}, {
                "name": "volume",
                "type": "uint256"
            }, {"name": "pricePerGB", "type": "uint256"}, {"name": "IPAndPort", "type": "string"}],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "volumeGB", "type": "uint256"}, {
                "name": "pricePerGB",
                "type": "uint256"
            }, {"name": "IPAndPort", "type": "string"}],
            "name": "createSellOrder",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "sellOrdersLength",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "storageContractsLength",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "buyOrdersLength",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "buyOrderIndex", "type": "uint256"}, {"name": "buyOrderID", "type": "uint256"}],
            "name": "cancelBuyOrder",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "storageContractIndex", "type": "uint256"}, {
                "name": "storageContractID",
                "type": "uint256"
            }],
            "name": "startStorageContract",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "buyOrderIndex", "type": "uint256"}],
            "name": "getBuyOrder",
            "outputs": [{"name": "id", "type": "uint256"}, {"name": "DO", "type": "address"}, {
                "name": "volume",
                "type": "uint256"
            }, {"name": "pricePerGB", "type": "uint256"}, {"name": "weiInitialAmount", "type": "uint256"}],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "storageContractIndex", "type": "uint256"}],
            "name": "weiAllowedToWithdraw",
            "outputs": [{"name": "weiAllowedToWithdraw", "type": "uint256"}],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "storageContractIndex", "type": "uint256"}, {
                "name": "storageContractID",
                "type": "uint256"
            }],
            "name": "stopStorageContract",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "sellOrderIndex", "type": "uint256"}, {"name": "sellOrderID", "type": "uint256"}],
            "name": "cancelSellOrder",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "storageContractIndex", "type": "uint256"}],
            "name": "getStorageContract",
            "outputs": [{"name": "id", "type": "uint256"}, {"name": "DO", "type": "address"}, {
                "name": "DSO",
                "type": "address"
            }, {"name": "IPandPort", "type": "string"}, {"name": "volumeGB", "type": "uint256"}, {
                "name": "startDate",
                "type": "uint256"
            }, {"name": "stopDate", "type": "uint256"}, {
                "name": "pricePerGB",
                "type": "uint256"
            }, {"name": "weiLeftToWithdraw", "type": "uint256"}, {
                "name": "withdrawedAtDate",
                "type": "uint256"
            }, {"name": "weiAllowedToWithdraw", "type": "uint256"}],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "storageContractIndex", "type": "uint256"}, {
                "name": "storageContractID",
                "type": "uint256"
            }],
            "name": "withdrawFromStorageContract",
            "outputs": [{"name": "withdrawedWei", "type": "uint256"}],
            "payable": false,
            "type": "function"
        }];
        this.contractAddress = '0x2c0399A46B5a9ED989bbe44d4f4F1f753bD52A64';
        this.httpProvider = 'http://127.0.0.1:8545/';
    });