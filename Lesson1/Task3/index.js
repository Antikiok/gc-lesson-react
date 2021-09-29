import './styles.css';

const rootElement = document.querySelector('#root');

const element = (
  <div class="greeting">
    <div class="greeting_title">Hello world</div>
    <div class="greeting_text">I\'m learning React</div>
  </div>
);

ReactDOM.render(element, rootElement);
