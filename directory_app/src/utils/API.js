let API = {
    populateCompany: function () {
        // GET request to Random User API for 75 users
        return fetch('https://randomuser.me/api/?results=75')
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Request failed.');
            })
            .then(data => {
                let workforce = data.results.map((emp) => {
                    return {
                        name: `${emp.name.first} ${emp.name.last}`,
                        phone: emp.phone,
                        email: emp.email,
                        id: emp.login.md5,
                        picture: emp.picture.medium
                    }
                });
                return workforce;
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default API;