import {createClientsHEader} from "./CreateHeader.js";
import {createClientsSection} from "./CreateClientsSection.js";

const createApp = () => {
    const header = createClientsHEader()
    const clientSection = createClientsSection()

    document.body.append(header, clientSection.main);
}

createApp()