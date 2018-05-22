(function()
{
  'use strict';
  angular.module("serviceApp",[])
  .controller("addToListController",['addingItemsToListService',addToListController])
  .controller("showListController",['addingItemsToListService',showListController])
  .service("addingItemsToListService",addingItemsToListService);
  function addToListController(addingItemsToListService)
  {
    console.log('addToListController');

    var addList=this;
    addList.itemName="";
    addList.itemQty="";
    addList.addToItem=function()
    {
      console.log("invoking addingItemsToListService ");
      addingItemsToListService.addToItems(addList.itemName,addList.itemQty);
    };
    addList.removeItem=function()
    {
      console.log("invoking addingItemsToListService ");
      addingItemsToListService.removeItems();
    };

  }
  function showListController(addingItemsToListService)
  {
    console.log('showListController');
    var showList=this;
    showList.addedItemList=addingItemsToListService.getItems();
    // showList.getItemList=function()
    // {
    //   console.log('invoking service to fetch the added item list');
    //   addingItemsToListService.getItems();
    // };
  }
  function addingItemsToListService()
  {
    var service=this;
      var itemList=[];
      var startIndex=0;
      var numberOfItemsToSplice=1;
    console.log('addingItemsToListService...');
    service.addToItems=function(currentItemName,currentItemQty)
    {
      console.log("adding items to the list");

      var currentItem={name:currentItemName,quantity:currentItemQty};
      itemList.push(currentItem);
      console.log("item added successfully");
    };
    service.getItems=function()
    {
      console.log('service invoked to fetch the added item list');
      return itemList;
    };
    service.removeItems=function()
    {
        console.log('service invoked to delete the added item list');
        itemList.splice(startIndex,numberOfItemsToSplice);
        console.log('item removed successfully');


    }
  }
})();
