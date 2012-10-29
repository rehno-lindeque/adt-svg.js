console.log("-- Test 1 (...) --");
(function(){
  console.log("TODO");

  var elResult = document.getElementsByClassName('reactive-result')[0];
  while (elResult.firstChild) {
    elResult.removeChild(elResult.firstChild);
  }
  elResult.appendChild(
    svg.svg({
        width: 120,
        height: 120,
        viewBox: "0 0 120 120",
        //xmlns: "http://www.w3.org/2000/svg",
        //version: "1.1"
      },
      svg.defs(
        svg.pattern({
            id: "Triangle",
            width: 10,
            height: 10,
            patternUnits: "userSpaceOnUse"
          },
          svg.polygon({points: "5,0 10,10 0,10"})
        )
      ),
      svg.circle({cx: 60, cy: 60, r: 50, fill: "url(#Triangle)"})
    )
  );
})();

