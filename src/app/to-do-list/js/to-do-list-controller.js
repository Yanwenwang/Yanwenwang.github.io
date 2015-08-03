(function () {

	angular
		.module('ywPortal')
		.controller('toDoListController', toDoListController);

		toDoListController.$inject = ['toDoListDataService'];

        function toDoListController (toDoListDataService) {
    		
    		var vm = this;

    		vm.data = toDoListDataService.data;
            
    		vm.newItem = '';

    		//toDoListDataService.getItems();

    		vm.actions = {
    			addItem: toDoListDataService.addItem,
    			deleteItem: toDoListDataService.deleteItem,
    			updateItem: toDoListDataService.updateItem
    		};
        }

}());
