export const loadStoredLinks = () => {
  const listLink = [];

  for (let i = 0; i < sessionStorage.length; i += 1) {
    const linkItem = {
      shortCode: sessionStorage.key(i),
      url: sessionStorage.getItem(sessionStorage.key(i)),
    };

    listLink.push(linkItem);
  }

  return listLink;
};

export const saveLinkInStorage = (url, shortCode) => {
  sessionStorage.setItem(shortCode, url);
};
