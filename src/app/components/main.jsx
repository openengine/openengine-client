import Navigation from './navigation.jsx';

let Main = (props) => {
  return (
    <div>
      <Navigation projectName="Engine" />
      {props.children}
    </div>
  );
}
