// TODO


class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false
        };
    }

    onEnter() {
        this.setState({
            done: !this.state.done
        });
    }

    onExit() {
        this.setState({
            done: !this.state.done
        });
    }

    render() {

        var style = {
            fontWeight: this.state.done ? 'bold' : ''
          };

        return (
            <li style={style} onMouseEnter={this.onEnter.bind(this)} onMouseLeave={this.onExit.bind(this)}>{this.props.item}</li>
            // <li style={style} onMouseOver={this.onHover.bind(this)}>{this.props.item}</li>
        );
    }
}

var GroceryList = (props) => (
    <ul>
        {props.items.map(item => 
            <GroceryListItem item={item} />    
        )}
    </ul>
);

ReactDOM.render(<GroceryList items={['Apples', 'Cucumbers', 'Kale']}/>, document.getElementById("app"));

// REFACTORING USING CLASS COMPONENTS

// class GroceryListItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <li>{this.props.item}</li>
//         );
//     }
// }

// var GroceryList = (props) => (
//     <ul>
//         {props.items.map(item => 
//             <GroceryListItem item={item} />    
//         )}
//     </ul>
// );

// ReactDOM.render(<GroceryList items={['Apples', 'Cucumbers', 'Kale']}/>, document.getElementById("app"));

//COMPONENT PROPERTIES

// var GroceryListItem = (props) => (
//     <ul>
//         <li>{props.items[0]}</li>
//         <li>{props.items[1]}</li>
//         <li>{props.items[2]}</li>
//     </ul>
// );


// var GroceryList = () => (
//     <GroceryListItem items={['Apples', 'Cucumbers', 'Kale']} />
// );


{/* var GroceryList = () => (       
    <ul>
        <li>Apples</li>
        <li>Coffee</li>
        <Cucumbers />   
        <Kale />
    </ul>
  );


var Cucumbers = () => (
    
    <li>Cucumbers</li>
);
      
var Kale = () => (
    <li>Kale</li>
); */}

// ReactDOM.render(<GroceryList />, document.getElementById("app"));
        