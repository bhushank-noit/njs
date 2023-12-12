/* function a() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log(
    "this will print 6 every time because all settime out referes to same i in memory"
  );
}
a(); */

/* function b() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log(
    "this will print 1,2 .. different every time because all settime out referes to different i in memory because i is blockscope here"
  );
}
b(); */

function c() {
  for (let i = 1; i <= 5; i++) {
    function print(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    print(i);
  }

  console.log(
    "to achive output like b() then use function because var for every function different variable created"
  );
}
c();
