// // export default function Profile() {
// //   return <div>Welcome to the profile</div>;
// // }
// import React from 'react';

// const UserProfile = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 to-pink-400 p-6">
//       <header className="flex justify-between items-center p-4">
//         <h1 className="text-2xl font-bold">PalettePicker</h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Palettes</a></li>
//             <li><a href="#">About Us</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main className="flex-grow flex flex-col items-center">
//         <div className="rounded-full w-40 h-40 bg-white mb-4 flex items-center justify-center">
//           <span className="text-3xl">👤</span> {/* Placeholder for profile picture */}
//         </div>
//         <h2 className="text-xl">User Name</h2>
//         <p className="mb-2">Email: user@example.com</p>

//         <h3 className="mt-6 mb-2">Edit Your Preferences</h3>
//         <div className="flex flex-col space-y-4 w-full max-w-md">
//           <input type="text" placeholder="Preferred Color" className="border rounded p-2" />
//           <input type="text" placeholder="Favorite Palette Name" className="border rounded p-2" />
//           <button className="bg-purple-600 text-white rounded p-2">Save Changes</button>
//         </div>

//         <h3 className="mt-6 mb-2">Saved Color Palettes</h3>
//         <div className="w-full max-w-md">
//           {/* Replace with dynamic color palette data */}
//           {[...Array(5)].map((_, index) => (
//             <div key={index} className="flex justify-between items-center p-2 border-b">
//               <div className="flex space-x-2">
//                 <div className="w-10 h-10 rounded" style={{ backgroundColor: '#FF5733' }}></div>
//                 <span>#FF5733</span>
//               </div>
//               <span>Palette Name</span>
//               <div>
//                 <button className="text-blue-600">Edit</button>
//                 <button className="text-red-600">Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       <footer className="bg-gray-800 text-white p-4">
//         <div className="flex justify-between">
//           <div>PalettePicker</div>
//           <div>
//             <p>Contact: example@gmail.com</p>
//             <p>Phone: (777) 123-4567</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default UserProfile;
