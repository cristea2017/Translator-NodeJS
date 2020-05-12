const translate = require("@vitalets/google-translate-api");
const fs = require("fs");

console.log("pasol nagui");

// const d = fs.readFileSync(`./localizable.txt`, "utf8");
// console.log("contetn of file ", d);

translate("Ik spreek Engels", { to: "en" })
  .then((res) => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
  })
  .catch((err) => {
    console.error(err);
  });

// let words = [
//   "COMMUNITY",
//   "Stickers",
//   "Effect",
//   "SAVE OPTIONS",
//   "Save",
//   "Publish as Combo",
//   "Applied Filters",
//   "Guest",
//   "Top",
//   "Tranding",
//   "Recent",
//   "Share",
//   "Favorites",
//   "Options",
// ];

// let keys = [
//   "COMMUNITY",
//   "Stickers",
//   "Effect",
//   "SAVE OPTIONS",
//   "Save",
//   "Publish as Combo",
//   "Applied Filters",
//   "Guest",
//   "Top",
//   "Tranding",
//   "Recent",
//   "Share",
//   "Favorites",
//   "Options",
//   "NO IMAGE IN GALLERY",
//   "Your artworks will be stocked here",
//   "Camera Roll",
//   "My Gallery",
//   "Faces",
//   "About",
//   "Delete",
//   "COMBO OPTIONS",
//   "APPLY EFFECT",
//   "Thanks for invention",
//   "go to",
//   "MEDIA",
//   "Type to add a comment",
//   "Sign In",
//   "Email",
//   "Password",
//   "Confirm Password",
//   "SIGN IN",
//   "Cancel",
//   "Don't have an account?",
//   "Sign Up",
//   "Likes",
//   "Following",
//   "Followers",
//   "Unfollow",
//   "Follow",
//   "Followed",
//   "Added a Comment",
//   "Liked a Combo",
//   "Added to Favorites",
//   "Likes",
//   "Followings",
//   "Followers",
//   "Followings",
//   "Followers",
//   "ago",
//   "Created Combos",
//   "My Combos",
//   "Favorite Combos",
//   "My Activity",
//   "Edit your avatar900 ",
//   "Username",
//   "Logout",
//   "Old Password",
//   "New Password",
//   "SAVE",
//   "From\nCamera",
//   "From\nGallery",
//   "Remove\ncurrent image",
//   "NO ACTIVITY YET",
//   "May be Later",
//   "Be the first to add a comment!",
//   "NO COMBOS IN",
//   "Try again later for a further information",
//   "NO COMBOS IN FAVORITE",
//   "To add to Favorites, tap on star in Combo page.",
//   "No internet connection.",
//   "Please check your connection \nand try again",
//   "Please try again.",
//   "You've made same changes",
//   "in your profile! Save changes?",
//   "This combo is available",
//   "when using camera directly.",
//   "Open Camera",
//   "Ooops!",
// ];

// translateKey = (word, callBack) => {
//   (async () => {
//     // English => Chinese
//     await translate(word, { to: "ru" })
//       .then((val) => {
//         callBack(val.text), console.log(val);
//       })
//       .catch(console.error);
//   })();
// };

// const generate = () => {
//   const properties = [];

//   translateKey("Hello", (call) => {
//     console.log(call);
//   });

//   //   words.map((e) => {
//   //     translateKey(e, (call) => {
//   //       properties.push(`"${keys[words.indexOf(e)]}" : "${call}"\n `);

//   //       if (words.length == properties.length) {
//   //         const string = `{
//   //   ${properties}
//   //   }
//   // `;

//   //         fs.writeFileSync("./translate.json", string, "utf8");
//   //       }
//   //     });
//   //   });
// };

// generate();
