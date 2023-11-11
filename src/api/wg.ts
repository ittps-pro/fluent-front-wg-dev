// const { Wg, wrapper } = require("wireguard-wrapper");

import { Wg } from "wireguard-wrapper";
interface User {
  name: String;
  username: String;
}

function createClient(user: User) {
  console.log("create: ", user);
}

class config {
  constructor(props: any) {}

  render() {
    return 1;
  }
}

export default {
  createClient,
  config,
};
