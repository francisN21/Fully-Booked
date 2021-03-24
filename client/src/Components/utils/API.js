import axios from "axios";

const apiURL = "https://www.googleapis.com/books/v1/volumes?q=";

const apikey = "&key=&key=AIzaSyCieXMRPR8YzUc58OiJYU3PQUMLvkyqUlw";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  BookSearch: function (query) {
    return axios.get(apiURL + query + apikey);
  },
};
