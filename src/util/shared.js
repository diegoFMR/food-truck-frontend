export function handleUserInput (e, context){

  const name = e.target.name;
  const value = e.target.value;
  
  context.setState({[name]: value} );// Set input value
}