import withProtectedClick from './common/withProtectedClick';
import { Link } from 'react-router-dom';

const ProtectedLink = withProtectedClick(Link);

export default ProtectedLink;
