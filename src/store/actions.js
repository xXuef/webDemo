export default {
  addFunc(con,n) {
    con.commit("add",n);
  },
  redeucFunc(con, n) {
    con.commit("reduction", n);
  }
};
