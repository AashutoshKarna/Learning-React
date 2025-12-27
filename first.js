const React = {
    createElement :  function(tag,styles,children){
        const element = document.createElement(tag);
        element.innerText= children;
        for (let key in style){
            // element.style.backgroundColor = element.style[key] are equivalent
            element.style[key] = styles[key];
        }
        return element;
    }
}

const header1 = React.createElement('h1',{backgroundColor:"blue", color:"white"},"Hello, I am Aashutosh Karna.");
const header2 = React.createElement('h2',{backgroundColor:"blue", color:"white"},"Hello, I am Karna.");

const ReactDOM = {
    render: function(element,root){
        root.append(element);
    }
}

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));

// const header1 = document.createElement('h1');
// header1.innerText = "Hello World.";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement('h2');
// header2.innerText = "My name is Aashutosh Karna.";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "30px";
// header2.style.color = "white";

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);  

