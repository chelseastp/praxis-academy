var myUser = (function(re) {
  var userEmail = ""

  function isValidEmail(email) {
    return re.email.test(email)
  }

  function getEmail() {
    return userEmail
  }

  function setEmail(email) {
    if (isValidEmail(email)) {
      userEmail = email
    } else {
      throw new Error("Email is invalid")
    }
  }

  return {
    setUserEmail: setEmail,
    getUserEmail: getEmail
  }
})(re)

myUser.setUserEmail("john.doe@mail.tld")