(function () {

    angular
        .module('ywPortal')
        .factory('toDoListDataService', toDoListDataService);

    toDoListDataService.$inject = ['$http'];

	function toDoListDataService($http) {

		var data = {
			todoList: [],
			id: 1
		};

		var service = {
			data: data,
			getItems: getItems,
			addItem: addItem,
			deleteItem: deleteItem,
			updateItem: updateItem
		};

		return service;

		function getItems() {
			// $http.get('http://localhost:8080/api/items')
			// 	.then(function (response) {
			// 		data.todoList = response.data;

			// 		for(var i = 0; i < data.todoList.length; i ++) {
			// 			data.todoList[i].update = data.todoList[i].name;
			// 			data.todoList[i].open = false;
			// 		}
			// 	});
		}

		function addItem (itemName) {
			data.todoList.push({ 
				item: itemName,
			      id: data.id
			});

			data.id++;

			// $http.post('http://localhost:8080/api/items', { name: itemName })
			// 	.then(function (response) {
			// 		getItems();
			// 	})
		}

		function deleteItem (itemId) {
			for (var j = 0; j < data.todoList.length; j++) {
				if(itemId === data.todoList[j].id) {
					data.todoList.splice(j, 1);
				}
			}
			// $http.delete('http://localhost:8080/api/items/' + itemId)
			// 	.then(function (response) {
			// 		getItems();
			// 	});
		}

		function updateItem (itemId, newItem) {
			for (var i = 0; i < data.todoList.length; i++) {
				if(itemId === data.todoList[i].id) {
					data.todoList[i].item = newItem;
				}
			}
			
			// $http.put('http://localhost:8080/api/items/' + itemId, { name: itemName })
			// 	.then(function (response) {
			// 		getItems();
			// 	})
		}
	}

}());