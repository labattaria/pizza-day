// import './App.css'
import Header from './components/Header/Header'
import Heading from './components/Heading/Heading'
import SubHeading from './components/SubHeading/SubHeading'
import LoginForm from './components/LoginForm/LoginForm'
import Menu from './components/Menu/Menu'

function App() {

  // ### func onAddToCartClick passes throught App -> Menu -> MenuList -> MenuItem -> Button component
  const onAddToCartClick = () => console.log('Successfully added!');

  return (
    <div className="wrapper">
      <Header className="header" />
      <main className="content">
        <Heading className="title" label="The best pizza." />
        <SubHeading className="sub-title" label="👋 Welcome! Please start by telling us your name:" />
        <LoginForm className="login-form" />
      </main>

      <Menu onClick={onAddToCartClick} />
    </div>
  );
}

export default App
