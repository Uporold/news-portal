/*import '../assets/sprite-svg/buddha.svg';
import '../assets/sprite-svg/fireworks.svg';
import '../assets/sprite-svg/canine.svg';
import '../assets/sprite-svg/bookmark.svg';
import '../assets/sprite-svg/watched.svg';
import '../assets/sprite-svg/comments.svg';*/


let files = require.context('../assets/sprite-svg', false, /\.svg$/);
files.keys().forEach(files);
