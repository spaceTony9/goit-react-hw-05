import { CONSTANTS } from '../../js/constants.js';
import css from './CastMemberCard.module.css';

function CastMemberCard({ cast: { name, character, profile_path: castPhoto } }) {
  return <li className={css.castMemberCard}>
    <div><img className={css.castMemberPhoto} src={CONSTANTS.PHOTO_BASE_URL + castPhoto} alt={`photo of ${name}`} />
    </div>
    <p className={css.text}>{name}</p>
    <p>{character}</p>
  </li>;
}

export default CastMemberCard;