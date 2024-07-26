//აუცილებლად 1 მშობელ ელემენტს აბრუნებს
// const testpage = () => {
//   return (
//     <>
//       <h1>hello</h1>
//       <p>Guys!!!</p>
//       <button>test</button>
//     </>
//   );
// };

// export default testpage;

//JSX-ში შეგვიძლია expression-ების გამოყენება
// const testpage = () => {
//   const age = 25;
//   return (
//     <>
//       <h3>Expressions</h3>
//       <div>I'm {age + 10} years old</div>
//     </>
//   );
// };

// export default testpage;

//Conditional Rendering

// const testpage = () => {
//   const x = 10;
//   if (x > 8) {
//     return <div>მეტია</div>;
//   }

//   return <div>ნაკლებია</div>;
// };

// export default testpage;

// const testpage = () => {
//   const isRegistered = true;
//   return (
//     <div>
//       <h2>&& ოპერატორი</h2>
//       {isRegistered && (
//         <div>
//           <button>Test</button>
//           <p>hellow</p>
//           <span>again</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default testpage;

// const testpage = () => {
//   const isRegistered = true;
//   return (
//     <div>
//       {isRegistered ? <button>log in</button> : <button>register</button>}
//     </div>
//   );
// };
// export default testpage;

// {
//   isRegistered ? <button>log in</button> : <button>register</button>;
// }

// if (isRegistered) {
//   return <button>log in</button>;
// } else {
//   return <button>register</button>;
// }

// const testpage = () => {
//   const age = 8;
//   return (
//     <div>
//       {age > 10 ? <p>შესვლა ნებადართულია</p> : <p>შესვლა აკრძალულია</p>}
//     </div>
//   );
// };
// export default testpage;
// "use client";

// import { useState } from "react";

// const testpage = () => {
//   const [number, setNumber] = useState(10);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setNumber(number - 1);
//         }}
//       >
//         &nbsp;&nbsp;-&nbsp;&nbsp;
//       </button>
//       {number}
//       <button
//         onClick={() => {
//           setNumber(number + 1);
//         }}
//       >
//         &nbsp;&nbsp;+&nbsp;&nbsp;
//       </button>
//     </div>
//   );
// };
// export default testpage;

// "use client";

// import { useState } from "react";

// const testpage = () => {
//   const [isUser, setIsUser] = useState(false);

//   return (
//     <div>
//       {isUser ? (
//         <button
//           onClick={() => {
//             setIsUser(false);
//           }}
//         >
//           log in
//         </button>
//       ) : (
//         <button
//           onClick={() => {
//             setIsUser(true);
//           }}
//         >
//           register
//         </button>
//       )}
//     </div>
//   );
// };
// export default testpage;

"use client";

import { useEffect, useState } from "react";

const TestPage = () => {
  const [num, setNum] = useState(0);
  const [x, setX] = useState(1);

  useEffect(() => {
    setNum(100 * x);
    console.log("rerendered");
  }, [x]);

  return (
    <div>
      testpage {num}
      <button
        onClick={() => {
          return setX(x + 1);
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default TestPage;
