function accum(s) {
  let accArray = [];
  for (i=0; i<s.length; i++) {
    accArray.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
  };
  return accArray.join("-");
}

