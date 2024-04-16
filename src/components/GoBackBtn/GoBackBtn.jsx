import { Link, useNavigate } from 'react-router-dom';

function GoBackBtn({ route }) {
  // function handleGoBack() {
  //   // navigate('/');
  // }

  return <div>

    <button><Link to={route}>Go back</Link></button>
  </div>;
}

export default GoBackBtn;