const encodedParams = new URLSearchParams();

encodedParams.set("key", "pYniZBZci6DcIkye31Eyjy5Sz2wgBvJ7");
encodedParams.set("action", "add");
encodedParams.set("service", "288");
encodedParams.set("link", "https://www.instagram.com/elbesnike/");
encodedParams.set("quantity", "12");

let url = "https://ad4tube.com/api/v2?key=pYniZBZci6DcIkye31Eyjy5Sz2wgBvJ7&action=add&service=288&link=https://www.instagram.com/elbesnike/&quantity=12";

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    cookie:
      "general_sessions=f6eeadef61608d113fff56d593f2ef9d2794fb4a; langCurrent=ar; ",
  },
  body: encodedParams,
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
