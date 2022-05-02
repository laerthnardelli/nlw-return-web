interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>;
}

function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="OK" />
    </div>
  );
}

export default App;
