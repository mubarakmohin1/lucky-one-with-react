
import './App.css';
import Component from './Components/Component/Component';

function App() {
  return (
    <div>
      <h1 className='book-collection'>Book collection</h1>
       <Component></Component>
       <div className='ans-qsn'>
         <b>Questin1:How react works?</b> <br />
         <p><u>Ans:</u> React which is a javascript <b>library</b> that creates user interfaces in a comfortable and productive way by <b> declarative</b> code.At first in an application react goes through its <b>virtual DOM</b> and create list of changes that need to be made to the <b>actual DOM</b> and then does it complete one single process. so If you have trees of objects on the virtual DOM and trees of objects on the real DOM and <b>automatically updates</b> the associated DOM element when you change code on a React element.</p> <br />
         <b>Questin2:Describes props vs state?</b> <br />
         <p>Ans: 1. In the meantime of react work state controlled through its componenet internally where props are controlled by renders of component in external way. <br /> 2. props are immutable and show better performance where state is mutable and worse performance show than props. <br /> 3. Though props make components reusable but State cannot make components reusable. <br /> 4. propschanged by parent Component but state is not </p>
          
       </div>
    </div>
  );
}

export default App;
