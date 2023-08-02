
/** *
 * returns querySelector
 * @param  {string} selector
 * @returns  {DomElement}  DomElement
 */


function qs(s) {
    return document.querySelector(s) ?? document.createElement("span");
    //  ilk s null sa sagdakini caliştir
    // boş ise ------------------------------------ span yap span ise boş yap
}



let qsa = s => document.querySelectorAll(s);



function createStudentElement(student) {
    let studentContainer = document.createElement("div")
    studentContainer.classList("student")
    // let studentİmg = document.createElement("img");
    // let studentInfo = document.createElement("div");
    // let studentName = document.createElement("h5");
    // let studentGender = document.createElement("h6");
    // let studentBday = document.createElement('h6');
    

    studentContainer.innerHTML= `    
    <img src="${student.img}" alt="">
    <div class="studentInfo">
        <h5>${student.firstName} ${student.lastName}""</h5>
        <h6>${student.gender}"</h6>
        <h6>${student.birthdate}"</h6>
    </div>`


        // studentContainer.appendChild(studentİmg);
        // studentInfo.appendChild(studentName);
        // studentInfo.appendChild(studentİmg);
        // studentContainer.appendChild(studentİmg);



        // `<div class="student">
        // <img src="https://picsum.photos/id/237/80/80" alt="">
        // <div class="studentInfo">
        //     <h5>Pelin Ergül</h5>
        //     <h6>Kadın</h6>
        //     <h6>26.09.1997</h6>
        // </div>
    // </div> `


 return studentContainer;

}