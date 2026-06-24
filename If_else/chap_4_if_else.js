let build_percentage_success =65;
if(build_percentage_success ===100)
console.log("Green Build");
else if(build_percentage_success >=90 && build_percentage_success <=99)
console.log("Stable (investigate failures)");
else if(build_percentage_success >=70 && build_percentage_success <=89)
console.log("Unstable");
else if(build_percentage_success <=70)
console.log("Broken Build — Block deployment")
