function Hello() {
  let myName = 'Biswa';
  let number = 436;
  let fullName = () => {
    return 'Biswa ranjan';
  }
  return <p>
    MessageNo: {number}. i am devloper {fullName()}
  </p>
}

export default Hello;