(function()
{
  'use strict';
  angular.module("serviceApp",[])
  .controller("addToListController",['addingItemsToListServiceFactory',addToListController])
  //.controller("showListController",['addingItemsToListServiceFactory',showListController])
  .factory("addingItemsToListServiceFactory",addingItemsToListServiceFactory);
  function addToListController(addingItemsToListServiceFactory)
  {
    console.log('addToListController');

    var addList=this;
    var addingItemsToListService=addingItemsToListServiceFactory();
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
    //var showList=this;

  //  var addingItemsToListServices=addingItemsToListServiceFactory();
    addList.addedItemList=addingItemsToListService.getItems();

  }
  // function showListController(addingItemsToListServiceFactory)
  // {
  //   console.log('showListController');
  //   var showList=this;
  //
  //   var addingItemsToListServices=addingItemsToListServiceFactory();
  //   showList.addedItemList=addingItemsToListServices.getItems();
  //   // showList.getItemList=function()
  //   // {
  //   //   console.log('invoking service to fetch the added item list');
  //   //   addingItemsToListService.getItems();
  //   // };
  // }
  function addingItemsToListServiceFactory()
  {
    console.log('addingItemsToListServiceFactory');
    var instance=function()
    {
      return new addingItemsToListService();
    };
    return instance;

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
