const axios = require('axios');

export async function attemptLogin(email, password) {
     return await axios.post('/attemptLogin', {
            email: email,
            password: password
        },
        {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
}
