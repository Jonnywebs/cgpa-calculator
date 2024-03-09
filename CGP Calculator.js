
let addInput = document.querySelector(".add");
let alert = document.querySelector(".alert");
let icon = document.querySelector(".icon");
counter = 6;
icon.addEventListener('click', () => {
    alert.style.height = "0";
    alert.style.padding = "0";
})
addInput.addEventListener('click', () => {
    document.querySelector(".course"+counter).style.display = "block";
    document.querySelector(".course-point"+counter).style.display = "block";
    document.querySelector(".point-attained"+counter).style.display = "block";
    document.querySelector(".course-cummulative"+counter).style.display = "block";
    counter = counter+1;

0
    if(counter >= 31){
        alert.style.height = "1rem";
        alert.style.padding = "3.5rem";
    }
});


let z1 = document.querySelector(".course-cummulative1");
let z2 = document.querySelector(".course-cummulative2");
let z3 = document.querySelector(".course-cummulative3");
let z4 = document.querySelector(".course-cummulative4");
let z5 = document.querySelector(".course-cummulative5");
let z6 = document.querySelector(".course-cummulative6");
let z7 = document.querySelector(".course-cummulative7");
let z8 = document.querySelector(".course-cummulative8");
let z9 = document.querySelector(".course-cummulative9");
let z10 = document.querySelector(".course-cummulative10");
let z11 = document.querySelector(".course-cummulative11");
let z12 = document.querySelector(".course-cummulative12");
let z13 = document.querySelector(".course-cummulative13");
let z14 = document.querySelector(".course-cummulative14");
let z15 = document.querySelector(".course-cummulative15");
let z16 = document.querySelector(".course-cummulative16");
let z17 = document.querySelector(".course-cummulative17");
let z18 = document.querySelector(".course-cummulative18");
let z19 = document.querySelector(".course-cummulative19");
let z20 = document.querySelector(".course-cummulative20");
let z21 = document.querySelector(".course-cummulative21");
let z22 = document.querySelector(".course-cummulative22");
let z23 = document.querySelector(".course-cummulative23");
let z24 = document.querySelector(".course-cummulative24");
let z25 = document.querySelector(".course-cummulative25");
let z26 = document.querySelector(".course-cummulative26");
let z27 = document.querySelector(".course-cummulative27");
let z28 = document.querySelector(".course-cummulative28");
let z29 = document.querySelector(".course-cummulative29");
let z30 = document.querySelector(".course-cummulative30");

let coursePoint = document.querySelector(".course-point-total");
let courseAttained = document.querySelector(".course-attained-total");
let courseCummulative = document.querySelector(".course-cummulative-total")
let cal = document.querySelector(".calc");
cal.addEventListener('click', () => {
    let x1 = document.querySelector(".course-point1").value;
    let x2 = document.querySelector(".course-point2").value;
    let x3 = document.querySelector(".course-point3").value;
    let x4 = document.querySelector(".course-point4").value;
    let x5 = document.querySelector(".course-point5").value;
    let x6 = document.querySelector(".course-point6").value;
    let x7 = document.querySelector(".course-point7").value;
    let x8 = document.querySelector(".course-point8").value;
    let x9 = document.querySelector(".course-point9").value;
    let x10 = document.querySelector(".course-point10").value;
    let x11 = document.querySelector(".course-point11").value;
    let x12 = document.querySelector(".course-point12").value;
    let x13 = document.querySelector(".course-point13").value;
    let x14 = document.querySelector(".course-point14").value;
    let x15 = document.querySelector(".course-point15").value;
    let x16 = document.querySelector(".course-point16").value;
    let x17 = document.querySelector(".course-point17").value;
    let x18 = document.querySelector(".course-point18").value;
    let x19 = document.querySelector(".course-point19").value;
    let x20 = document.querySelector(".course-point20").value;
    let x21 = document.querySelector(".course-point21").value;
    let x22 = document.querySelector(".course-point22").value;
    let x23 = document.querySelector(".course-point23").value;
    let x24 = document.querySelector(".course-point24").value;
    let x25 = document.querySelector(".course-point25").value;
    let x26 = document.querySelector(".course-point26").value;
    let x27 = document.querySelector(".course-point27").value;
    let x28 = document.querySelector(".course-point28").value;
    let x29 = document.querySelector(".course-point29").value;
    let x30 = document.querySelector(".course-point30").value;

    let y1 = document.querySelector(".point-attained1").value;
    let y2 = document.querySelector(".point-attained2").value;
    let y3 = document.querySelector(".point-attained3").value;
    let y4 = document.querySelector(".point-attained4").value;
    let y5 = document.querySelector(".point-attained5").value;
    let y6 = document.querySelector(".point-attained6").value;
    let y7 = document.querySelector(".point-attained7").value;
    let y8 = document.querySelector(".point-attained8").value;
    let y9 = document.querySelector(".point-attained9").value;
    let y10 = document.querySelector(".point-attained10").value;
    let y11 = document.querySelector(".point-attained11").value;
    let y12 = document.querySelector(".point-attained12").value;
    let y13 = document.querySelector(".point-attained13").value;
    let y14 = document.querySelector(".point-attained14").value;
    let y15 = document.querySelector(".point-attained15").value;
    let y16 = document.querySelector(".point-attained16").value;
    let y17 = document.querySelector(".point-attained17").value;
    let y18 = document.querySelector(".point-attained18").value;
    let y19 = document.querySelector(".point-attained19").value;
    let y20 = document.querySelector(".point-attained20").value;
    let y21 = document.querySelector(".point-attained21").value;
    let y22 = document.querySelector(".point-attained22").value;
    let y23 = document.querySelector(".point-attained23").value;
    let y24 = document.querySelector(".point-attained24").value;
    let y25 = document.querySelector(".point-attained25").value;
    let y26 = document.querySelector(".point-attained26").value;
    let y27 = document.querySelector(".point-attained27").value;
    let y28 = document.querySelector(".point-attained28").value;
    let y29 = document.querySelector(".point-attained29").value;
    let y30 = document.querySelector(".point-attained30").value;


    let gpa = document.querySelector(".cgpa");
    if(y1 >= 70){
        c1 = 4;
    }
    else if(y1 >= 60){
        c1 = 3;
    }
    else if(y1 >= 50){
        c1 = 2;
    }
    else if(y1 >= 45){
        c1 = 1;
    }
    else{
        c1 = 0;
    };

    if(y2 >= 70){
        c2 = 4;
    }
    else if(y2 >= 60){
        c2 = 3;
    }
    else if(y2 >= 50){
        c2 = 2;
    }
    else if(y2 >= 45){
        c2 = 1;
    }
    else{
        c2 = 0;
    };



    if(y3 >= 70){
        c3 = 4;
    }
    else if(y3 >= 60){
        c3 = 3;
    }
    else if(y3 >= 50){
        c3 = 2;
    }
    else if(y3 >= 45){
        c3 = 1;
    }
    else{
        c3 = 0;
    };


    if(y4 >= 70){
        c4 = 4;
    }
    else if(y4 >= 60){
        c4 = 3;
    }
    else if(y4 >= 50){
        c4 = 2;
    }
    else if(y4 >= 45){
        c4 = 1;
    }
    else{
        c4 = 0;
    };


    if(y5 >= 70){
        c5 = 4;
    }
    else if(y5 >= 60){
        c5 = 3;
    }
    else if(y5 >= 50){
        c5 = 2;
    }
    else if(y5 >= 45){
        c5 = 1;
    }
    else{
        c5 = 0;
    };


    if(y6 >= 70){
        c6 = 4;
    }
    else if(y6 >= 60){
        c6 = 3;
    }
    else if(y6 >= 50){
        c6 = 2;
    }
    else if(y6 >= 45){
        c6 = 1;
    }
    else{
        c6 = 0;
    };


    if(y7 >= 70){
        c7 = 4;
    }
    else if(y7 >= 60){
        c7 = 3;
    }
    else if(y7 >= 50){
        c7 = 2;
    }
    else if(y7 >= 45){
        c7 = 1;
    }
    else{
        c7 = 0;
    };


    if(y8 >= 70){
        c8 = 4;
    }
    else if(y8 >= 60){
        c8 = 3;
    }
    else if(y8 >= 50){
        c8 = 2;
    }
    else if(y8 >= 45){
        c8 = 1;
    }
    else{
        c8 = 0;
    };


    if(y9 >= 70){
        c9 = 4;
    }
    else if(y9 >= 60){
        c9 = 3;
    }
    else if(y9 >= 50){
        c9 = 2;
    }
    else if(y9 >= 45){
        c9 = 1;
    }
    else{
        c9 = 0;
    };


    if(y10 >= 70){
        c10 = 4;
    }
    else if(y10 >= 60){
        c10 = 3;
    }
    else if(y10 >= 50){
        c10 = 2;
    }
    else if(y10 >= 45){
        c10 = 1;
    }
    else{
        c10 = 0;
    };


    if(y11 >= 70){
        c11 = 4;
    }
    else if(y11 >= 60){
        c11 = 3;
    }
    else if(y11 >= 50){
        c11 = 2;
    }
    else if(y11 >= 45){
        c11 = 1;
    }
    else{
        c11 = 0;
    };


    if(y12 >= 70){
        c12 = 4;
    }
    else if(y12 >= 60){
        c12 = 3;
    }
    else if(y12 >= 50){
        c12 = 2;
    }
    else if(y12 >= 45){
        c12 = 1;
    }
    else{
        c12 = 0;
    };


    if(y13 >= 70){
        c13 = 4;
    }
    else if(y13 >= 60){
        c13 = 3;
    }
    else if(y13 >= 50){
        c13 = 2;
    }
    else if(y13 >= 45){
        c13 = 1;
    }
    else{
        c13 = 0;
    };


    if(y14 >= 70){
        c14 = 4;
    }
    else if(y14 >= 60){
        c14 = 3;
    }
    else if(y14 >= 50){
        c14 = 2;
    }
    else if(y14 >= 45){
        c14 = 1;
    }
    else{
        c14 = 0;
    };


    if(y15 >= 70){
        c15 = 4;
    }
    else if(y15 >= 60){
        c15 = 3;
    }
    else if(y15 >= 50){
        c15 = 2;
    }
    else if(y15 >= 45){
        c15 = 1;
    }
    else{
        c15 = 0;
    };


    if(y16 >= 70){
        c16 = 4;
    }
    else if(y16 >= 60){
        c16 = 3;
    }
    else if(y16 >= 50){
        c16 = 2;
    }
    else if(y16 >= 45){
        c16 = 1;
    }
    else{
        c16 = 0;
    };


    if(y17 >= 70){
        c17 = 4;
    }
    else if(y17 >= 60){
        c17 = 3;
    }
    else if(y17 >= 50){
        c17 = 2;
    }
    else if(y17 >= 45){
        c17 = 1;
    }
    else{
        c17 = 0;
    };


    if(y18 >= 70){
        c18 = 4;
    }
    else if(y18 >= 60){
        c18 = 3;
    }
    else if(y18 >= 50){
        c18 = 2;
    }
    else if(y18 >= 45){
        c18 = 1;
    }
    else{
        c18 = 0;
    };


    if(y19 >= 70){
        c19 = 4;
    }
    else if(y19 >= 60){
        c19 = 3;
    }
    else if(y19 >= 50){
        c19 = 2;
    }
    else if(y19 >= 45){
        c19 = 1;
    }
    else{
        c19 = 0;
    };


    if(y20 >= 70){
        c20 = 4;
    }
    else if(y20 >= 60){
        c20 = 3;
    }
    else if(y20 >= 50){
        c20 = 2;
    }
    else if(y20 >= 45){
        c20 = 1;
    }
    else{
        c20 = 0;
    };


    if(y21 >= 70){
        c21 = 4;
    }
    else if(y21 >= 60){
        c21 = 3;
    }
    else if(y21 >= 50){
        c21 = 2;
    }
    else if(y21 >= 45){
        c21 = 1;
    }
    else{
        c21 = 0;
    };


    if(y22 >= 70){
        c22 = 4;
    }
    else if(y22 >= 60){
        c22 = 3;
    }
    else if(y22 >= 50){
        c22 = 2;
    }
    else if(y22 >= 45){
        c22 = 1;
    }
    else{
        c22 = 0;
    };


    if(y23 >= 70){
        c23 = 4;
    }
    else if(y23 >= 60){
        c23 = 3;
    }
    else if(y23 >= 50){
        c23 = 2;
    }
    else if(y23 >= 45){
        c23 = 1;
    }
    else{
        c23 = 0;
    };


    if(y24 >= 70){
        c24 = 4;
    }
    else if(y24 >= 60){
        c24 = 3;
    }
    else if(y24 >= 50){
        c24 = 2;
    }
    else if(y24 >= 45){
        c24 = 1;
    }
    else{
        c24 = 0;
    };


    if(y25 >= 70){
        c25 = 4;
    }
    else if(y25 >= 60){
        c25 = 3;
    }
    else if(y25 >= 50){
        c25 = 2;
    }
    else if(y25 >= 45){
        c25 = 1;
    }
    else{
        c25 = 0;
    };

    if(y26 >= 70){
        c26 = 4;
    }
    else if(y26 >= 60){
        c26 = 3;
    }
    else if(y26 >= 50){
        c26 = 2;
    }
    else if(y26 >= 45){
        c26 = 1;
    }
    else{
        c26 = 0;
    };

    if(y27 >= 70){
        c27 = 4;
    }
    else if(y27 >= 60){
        c27 = 3;
    }
    else if(y27 >= 50){
        c27 = 2;
    }
    else if(y27 >= 45){
        c27 = 1;
    }
    else{
        c27 = 0;
    };

    if(y28 >= 70){
        c28 = 4;
    }
    else if(y28 >= 60){
        c28 = 3;
    }
    else if(y28 >= 50){
        c28 = 2;
    }
    else if(y28 >= 45){
        c28 = 1;
    }
    else{
        c28 = 0;
    };

    if(y29 >= 70){
        c29 = 4;
    }
    else if(y29 >= 60){
        c29 = 3;
    }
    else if(y29 >= 50){
        c29 = 2;
    }
    else if(y29 >= 45){
        c29 = 1;
    }
    else{
        c29 = 0;
    };

    if(y30 >= 70){
        c30 = 4;
    }
    else if(y30 >= 60){
        c30 = 3;
    }
    else if(y30 >= 50){
        c30 = 2;
    }
    else if(y30 >= 45){
        c30 = 1;
    }
    else{
        c30 = 0;
    };




    z1.value = x1*c1;
    z2.value = x2*c2;
    z3.value = x3*c3;
    z4.value = x4*c4;
    z5.value = x5*c5;
    z6.value = x6*c6;
    z7.value = x7*c7;
    z8.value = x8*c8;
    z9.value = x9*c9;
    z10.value = x10*c10;
    z11.value = x11*c11;
    z12.value = x12*c12;
    z13.value = x13*c13;
    z14.value = x14*c14;
    z15.value = x15*c15;
    z16.value = x16*c16;
    z17.value = x17*c17;
    z18.value = x18*c18;
    z19.value = x19*c19;
    z20.value = x20*c20;
    z21.value = x21*c21;
    z22.value = x22*c22;
    z23.value = x23*c23;
    z24.value = x24*c24;
    z25.value = x25*c25;
    z26.value = x26*c26;
    z27.value = x27*c27;
    z28.value = x28*c28;
    z29.value = x29*c29;
    z30.value = x30*c30;

    coursePoint.value = Number(x1)+Number(x2)+Number(x3)+Number(x4)+Number(x5)+Number(x6)+Number(x7)+Number(x8)+Number(x9)+Number(x10)+Number(x11)+Number(x12)+Number(x13)+Number(x14)+Number(x15)+Number(x16)+Number(x17)+Number(x18)+Number(x19)+Number(x20)+Number(x21)+Number(x22)+Number(x23)+Number(x24)+Number(x25)+Number(x26)+Number(x27)+Number(x28)+Number(x29)+Number(x30);
    courseAttained.value = Number(y1)+Number(y2)+Number(y3)+Number(y4)+Number(y5)+Number(y6)+Number(y7)+Number(y8)+Number(y9)+Number(y10)+Number(y11)+Number(y12)+Number(y13)+Number(y14)+Number(y15)+Number(y16)+Number(y17)+Number(y18)+Number(y19)+Number(y20)+Number(y21)+Number(y22)+Number(y23)+Number(y24)+Number(y25)+Number(y26)+Number(y27)+Number(y28)+Number(y29)+Number(y30);
    courseCummulative.value = Number(z1.value)+Number(z2.value)+Number(z3.value)+Number(z4.value)+Number(z5.value)+Number(z6.value)+Number(z7.value)+Number(z8.value)+Number(z9.value)+Number(z10.value)+Number(z11.value)+Number(z12.value)+Number(z13.value)+Number(z14.value)+Number(z15.value)+Number(z16.value)+Number(z17.value)+Number(z18.value)+Number(z19.value)+Number(z20.value)+Number(z21.value)+Number(z22.value)+Number(z23.value)+Number(z24.value)+Number(z25.value)+Number(z26.value)+Number(z27.value)+Number(z28.value)+Number(z29.value)+Number(z30.value);

    let totalScore = courseCummulative.value;
    let totalPoints = coursePoint.value;
    gpa.value = totalScore/totalPoints;
    if(gpa.value >= 3.5){
        document.querySelector(".grades").innerHTML = "First Class!";
    }
    else if(gpa.value >= 3){
        document.querySelector(".grades").innerHTML = "Second Class Upper!";
    }
    else if(gpa.value >= 2){
        document.querySelector(".grades").innerHTML = "Second Class Lower!";
    }
    else if(gpa.value >= 1){
        document.querySelector(".grades").innerHTML = "Third Class!"
    }
    else{
        document.querySelector(".grades").innerHTML = "Thanks for coming!";
    }
});
let tops = document.querySelector(".top");
let backToTop = document.querySelector(".backtotop");
tops.addEventListener('mouseenter', () => {
    backToTop.style.opacity = "1";
});
tops.addEventListener('mouseleave', () => {
    backToTop.style.opacity = "0";
});