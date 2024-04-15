import { Link } from 'react-router-dom';

function GoBackBtn({ route }) {
  return <div>

    <button><Link to={route}>Return to home page</Link></button>
  </div>;
}

export default GoBackBtn;