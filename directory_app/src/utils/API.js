import axios from "axios";

export default {
    populateCompany: async function () {
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
                        id: emp.id.value,
                        picture: emp.picture.thumbnail
                    }
                });
                return workforce;
            })
            .catch(error => {
                console.log(error);
            });
    }

    // populateCompany: function () {
    //     return new Promise((resolve, reject) => {
    //         // GET request to Random User API for 75 users
    //         axios.get("https://randomuser.me/api/?results=75").then((response) => {
    //             let workforce = response.data.results.map((emp) => {
    //                 return {
    //                     name: `${emp.name.first} ${emp.name.last}`,
    //                     phone: emp.phone,
    //                     email: emp.email,
    //                     id: emp.id.value,
    //                     picture: emp.picture.thumbnail
    //                 };
    //             });
    //             resolve(workforce);
    //         }).catch((err) => reject(err));
    //     });
    // }

}