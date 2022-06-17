import toolicon from "../images/content_improver_icon.svg";
import file from "../images/file.svg";
import rocket from "../images/rocket.svg";
import brain from "../images/brian.svg";
import microScope from "../images/microScope.svg";

/**method for inserting image
 * @param {Array} list of tools  **/

export const toolsImage = (response) => {
  return response?.data?.tools?.map((res) => {
    if (res?.id === "blog-introduction") {
      return { ...res, img: brain };
    } else if (res?.id === "before-after-bridge") {
      return { ...res, img: file };
    } else if (res?.id === "hero-text") {
      return { ...res, img: microScope };
    } else if (res?.id === "quote-write") {
      return { ...res, img: rocket };
    } else {
      return { ...res, img: toolicon };
    }
  });
};

/**  Formatting the tag
 * @param {string} toolID */

export const formattingTag = (tag) => {
  /* Replacing dash */
  let dashReplace = tag?.replaceAll("-", " ");
  /* Capitizing First letter */
  return dashReplace?.[0]?.toUpperCase() + dashReplace?.slice(1);
};

/**  Formatting the date
 * @param {number} date*/

export const formattingDate = (date) => {
  let isoDate = new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return isoDate;
};
