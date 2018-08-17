import { configureFakeBackend } from '../_helpers';

export const cropifyService = {
    saveImage};

function saveImage() {
    return configureFakeBackend.saveImageAPI(`/images`, 'GET').then(handleResponse);
}
function handleResponse(response) {
    return response.text().then(text => {
        console.log(text);
        return text && JSON.parse(text);
    });
}
