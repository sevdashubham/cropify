export const configureFakeBackend= {
    saveImageAPI};

function saveImageAPI(url, opts) {
        return new Promise((resolve) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // authenticate
                if (url ==='/images' && opts === 'GET') {
                    // get parameters from get request
                    console.log('here');
                    const response = {
                        text: 'https://picsum.photos/800/100?image=1062'
                    };
                    resolve({ ok: true,text: () => Promise.resolve(JSON.stringify(response))});
                }
            }, 1500);
        });
}
