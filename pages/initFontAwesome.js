import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function initFontAwesome() {
    library.add(fab, faInstagram, faTwitter, faGlobe);
}

