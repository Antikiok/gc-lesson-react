const rootElement = document.querySelector('#root');

const element = React.createElement('div', { className: 'greeting' }, [
  React.createElement('div', { className: 'greeting_title' }, `Hello, world!`),
  React.createElement('div', { className: 'greeting_text' }, `I'm learning React`),
]);

ReactDOM.render(element, rootElement);
