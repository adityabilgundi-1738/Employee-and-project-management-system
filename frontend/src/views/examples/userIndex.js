import react, {useState, useEffect} from 'react';

function HookCounter() {
  const [count,setCount] = useState(0);
  const [name, setName] = useEffect('');

  useEffect(() => {
    console.log('useEffect - Updating document title');
    document.title = `You clicked me ${count} times`

  })

  return(
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Click me! {count} times</button>
    </div>
  )
}

export default HookCounter;