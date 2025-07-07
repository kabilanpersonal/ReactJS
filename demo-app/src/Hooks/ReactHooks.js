import UseStateHooks from "./UseStateHooks"
import UseEffectHook from "./UseEffectHook"
import UseContextHook from "./UseContextHook"
import UseReducerHook from "./UseReducerHook"
const ReactHooks = () => {
    return (
        <>
            <p>Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
        <p>There are 3 rules for hooks</p>
        <ul>
            <li>Only call hooks at the top level of the component. Do not call hooks inside loops, conditions, or nested functions.</li>
            <li>Hooks can only be called from function components or custom hooks; Doesn't suit for class components or regular JS functions.</li>
            <li>Hooks cannot be called conditionally.</li>
        </ul>
        <h3>Types of Hooks</h3>
        <ol>
            <li><UseStateHooks /></li>
            <li><UseEffectHook /></li>
            <li><UseContextHook /></li>   
            <li><UseReducerHook /></li>
        </ol>
        </>
    )
}

export default ReactHooks