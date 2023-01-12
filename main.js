const allInput = document.querySelectorAll('input[type="radio"]')
const optionClasses = ['misSelected', 'bisSelected', 'sisSelected', 'pisSelected'];
const options = optionClasses.map((className) => document.querySelectorAll(`.${className}`));
const everyOption = document.querySelectorAll('.misSelected, .bisSelected, .sisSelected, .pisSelected');
//When we're using forEach method for everyOption, all the elements targeted by all these classes are getting iterated over.
//When we're using forEach method for options, all the elements targeted by that respected class are getting iterated over.
options.forEach((option, i) => { //misSelected, 0
  option.forEach((singleOption) => { //misSelected's elements
    console.log("singleOption[i]", singleOption)
    singleOption.onclick = () => { //click on misSelected elements
      everyOption.forEach((everySOption) => {
        everySOption.classList.remove('active'); //remove active from any other class
      });
      options[i].forEach((innerSingleOption) => { 
        console.log(options[i])
        innerSingleOption.classList.add('active');
      });
      allInput[i].checked = true;
    };
  });
  //for placing the active class on the selected 
  switch (true) {
    case allInput[i].checked:
    options[i].forEach((innerSingleOption) => { 
        innerSingleOption.classList.add('active');
        });
        break;

    default:
        break;
}
});
allInput.forEach((singleInput, i) => {
    singleInput.onchange = () => {
        everyOption.forEach((everySOption) => {
            everySOption.classList.remove('active'); //remove active from any other class
          });
        options[i].forEach((innerSingleOption) => { 
            innerSingleOption.classList.add('active');
        });
    }
})
