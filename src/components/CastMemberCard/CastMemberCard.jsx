import { CONSTANTS } from '../../js/constants.js';

function CastMemberCard({ cast: { name, character, profile_path: castPhoto } }) {
  return <div>
    <img src={CONSTANTS.PHOTO_BASE_URL + castPhoto} alt={`photo of ${name}`} />
    <p>{name}</p>
    <p>{character}</p>
  </div>;
}

export default CastMemberCard;