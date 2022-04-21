const https = require("https"); // Dibutuhkan sebagai protokol untuk akses data.

/**
 * Untuk memudahkan kami telah menyiapkan fungsi untuk melakukan request data starwars.
 * Contoh params: https://swapi.dev/api/people/1
 */

function promiseStarWarsData(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let result = "";

        if (res.statusCode !== 200) {
          reject(new Error(res.statusCode));
        }

        res.on("data", (d) => {
          result += d;
        });

        res.on("end", () => {
          resolve(JSON.parse(result));
        });
      })
      .on("error", (e) => {
        reject(e);
      });
  });
}

function getDataPeopleByIdWithFilms(peopleId) {
  // TODO: answer here
  return new Promise((resolve, reject) => {
    promiseStarWarsData(`https://swapi.dev/api/people/${peopleId}`)
      .then((res) => {
        let result = [];
        let promise = [];

        for (let i = 0; i < res.films.length; i++) {
          promise.push(
            new Promise((resolve, reject) => {
              promiseStarWarsData(res.films[i]).then((response) =>
                resolve({
                  title: response.title,
                  episode_id: response.episode_id,
                })
              );
            })
          );
        }
        Promise.all(promise).then((values) => {
          resolve({ ...res, films: values });
        });
      })
      .catch((err) => reject(err));
  });
}
getDataPeopleByIdWithFilms(1);
module.exports = { getDataPeopleByIdWithFilms };
