function validEmail(str) {
	 if (!str) return false;

  const regex = /^[A-Za-z0-9]+([.-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+([.-]?[A-Za-z0-9]+)*(\.[A-Za-z]{2,3})+$/;

  return regex.test(str);
  //your JS code here.
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
