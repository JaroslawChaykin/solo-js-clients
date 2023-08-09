import {createClientsHEader} from "./CreateHeader.js";

const createApp = () => {
    const header = createClientsHEader()
    document.body.append(header);
}

createApp()