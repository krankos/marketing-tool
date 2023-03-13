const encodedParams = new URLSearchParams();

encodedParams.set("key", "pYniZBZci6DcIkye31Eyjy5Sz2wgBvJ7");
encodedParams.set("action", "services");

let url = "https://ad4tube.com/api/v2";

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    cookie:
      "general_sessions=f6eeadef61608d113fff56d593f2ef9d2794fb4a; langCurrent=; ",
  },
  body: encodedParams,
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
