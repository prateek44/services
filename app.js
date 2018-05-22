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
  }
})();
