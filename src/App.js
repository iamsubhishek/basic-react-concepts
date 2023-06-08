import logo from './logo.svg';
import './App.css';
import Jsxexample from './components/Jsxexample';
import FunctionalCompExample from './components/FunctionalCompExample';
import ClassCompExample from './components/ClassCompExample';
import PropFunctCompExample from './components/PropFunctCompExample';
import PropClassComponentExample from './components/PropClassComponentExample';
import StateClassCompExample  from './components/StateClassCompExample';
import StateSetClassCompExample from './components/StateSetClassCompExample';
import StateSetParameterClassCompExample from './components/StateSetParameterClassCompExample';
import EventBind from './components/EventBind';
import ParentComponent from './components/MethodAsProps/ParentComponent';
import UserGreeting from './components/ConditionRendering/UserGreeting';
import List from './components/List';
import PersonDetails from './components/List/PersonDetails';
import ListWithoutUniqueIdUseKey from './components/List/ListWithoutUniqueIdUseKey';
import Stylesheet from './components/Styling/Stylesheet'
import Inline from './components/Styling/Inline'
import './appStyles.css'
import styles  from './appStyles.module.css'
import Form from './components/Form/Form';
import FragmentDemo from './components/Fragment/FragmentDemo';
import Table from './components/Fragment/Table';
import Refdemo from './components/RefDemo/Refdemo';
import Callbackrefdemo from './components/RefDemo/Callbackrefdemo';
import FocusInput from './components/RefDemo/Attachreftoclasscomponentnotcomponentdidmount/FocusInput';
import FRParentInput from './components/RefDemo/ForwardRefExample/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Hero from './components/ErrorBoundary/Hero';
import ClickCounter from './components/HigherOrderComponent/ClickCounter';
import HoverCounter from './components/HigherOrderComponent/HoverCounter';
import ClickCounterex from './components/RenderProps/ClickCounterex';
import HoverCounterex from './components/RenderProps/HoverCounterex';
import User from './components/RenderProps/User';
import CounterCommon from './components/RenderProps/CounterCommon.js';
import { UserProvider } from './components/ContextExample/userContext';
import ComponentC from './components/ContextExample/ComponentC';
import Hello from './components/Hello';
import Person from './components/List/Person';
function App() {
  return (
    <div className="App">
{/* Step 2  */}
{/* <UserProvider value= "Subhishek">
  <ComponentC />
</UserProvider> */}
   {/*<Form></Form>
     <Jsxexample></Jsxexample>
    <FunctionalCompExample/>
    <ClassCompExample></ClassCompExample>
    <PropFunctCompExample name="Subhishek" profile="Software Developer">
      <p>this is children prop</p>
    </PropFunctCompExample>
    <PropFunctCompExample name="Subham" profile="Application Developer"/>

    <PropClassComponentExample name="Subhishek" profile="Software Developer">
      <p>this is children prop</p>
    </PropClassComponentExample>
    <PropClassComponentExample name="Subham" profile="Application Developer"/> 
     <StateClassCompExample></StateClassCompExample> 
     <StateSetClassCompExample/>
<StateSetParameterClassCompExample/>
<EventBind></EventBind>
<ParentComponent></ParentComponent>
<UserGreeting/>
<List/>
<PersonDetails/>
<ListWithoutUniqueIdUseKey/>
 <h1 className='error'>error </h1>
  
  <h1 className={styles.success}>Success</h1>
  
<Stylesheet secondary={true}></Stylesheet>
<Inline></Inline>..
<FragmentDemo></FragmentDemo>
<Table></Table>
<Refdemo></Refdemo>
<Callbackrefdemo></Callbackrefdemo>
<FocusInput></FocusInput>
<FRParentInput></FRParentInput>
<PortalDemo></PortalDemo>

<ErrorBoundary>
<Hero heroName="Batman" />
</ErrorBoundary>
<ErrorBoundary>
<Hero heroName="Superman"/>
</ErrorBoundary>
<ErrorBoundary>
 <Hero heroName="Joker" />  
</ErrorBoundary>


<ClickCounter></ClickCounter>
<HoverCounter></HoverCounter>
*/}
{/* <ClickCounterex></ClickCounterex>
<HoverCounterex></HoverCounterex>
<User render={(isloggedIn)=>isloggedIn ? 'Subhishek':'Guest' }></User> */}
{/* <CounterCommon render={(count,incrementCount)=>( <ClickCounterex count={count} incrementCount={incrementCount}/>)}/>
<CounterCommon render={(count,incrementCount)=>( <HoverCounterex count={count} incrementCount={incrementCount}/>)}/> */}
<FRParentInput></FRParentInput>
</div>
  );
}

export default App;
