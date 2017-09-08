// var GroceryList = (item) => (
//   <ul>
//     <GroceryListItem />
//   </ul>
// );

// // var GroceryList = () => (
// //   <ul>
// //     <GroceryListItem />
// //     <Kale />
// //   </ul>
// // );

// // var Cucumbers = () => <li>Cucumbers</li>;
// // var Kale = () => <li>Kale</li>;

// var GroceryListItem = (props.item) => (
//   <li>{props.item}</li>
// )

var GroceryListItem = (props) => (
   <li>{props.item}</li>
)

 var GroceryList = () => (
   <ul>
     <GroceryListItem item={'kale'} />
     <GroceryListItem item={'turnip'} />
   </ul>
 );

ReactDOM.render(<GroceryList />, document.getElementById("app"));