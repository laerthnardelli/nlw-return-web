interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="button">{props.text ?? "Default"}</button>;
}

function App() {
  return (
    <div className="gap-button">
      <Button text="Enviar" />
      <Button text="OK" />
      <Button />
    </div>
  );
}

export default App;
