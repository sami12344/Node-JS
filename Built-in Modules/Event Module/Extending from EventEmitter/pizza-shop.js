const EventEmmiter = require("node:events")

class PizzaShop  extends EventEmmiter{
 constructor(){
  super()
  this.orderNumber =  0
 }
 order(){
  this.orderNumber++
  this.emit('order',size,toppings)
 }
 displayOrderNumber(){
  console.log(`Current order number: ${this.orderNumber}`);
 }
}
module.exports = PizzaShop