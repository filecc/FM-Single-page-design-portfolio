/* Add the specified classes to the given HTML element */
function addClasses(element, classes) {
  classes.forEach((_class) => element.classList.add(_class));
}

/* Adds the specified ID to the given HTML element */
function addID(element, id) {
  element.setAttribute('id', id);
}

/* Creates a new HTML element with the specified tag name, classes and text content */
function createChild(tagName, id, classes, text) {
  const newElement = document.createElement(tagName);
  if (classes) addClasses(newElement, classes);
  if (id) addID(newElement, id);
  if (text) (newElement.textContent = text);
  return newElement;
}

/* Creates a new HTML element with an object in input */
function createChildFromObject(props) {
  const {
    tag, id, classes, text, ...rest
  } = props;
  const newElement = document.createElement(tag);
  if (classes) addClasses(newElement, classes);
  if (id) addID(newElement, id);
  if (text) (newElement.textContent = text);
  if (rest) {
    Object.entries(rest).forEach(([key, value]) => {
      newElement.setAttribute(key, value);
    });
  }
  return newElement;
}

/* Remove the specified classes to the given HTML element */
function removeClasses(element, classes) {
  classes.forEach((_class) => element.classList.remove(_class));
}

/* Toggle the specified classes to the given HTML element */
function toggleClasses(element, classes) {
  classes.forEach((_class) => element.classList.toggle(_class));
}

/* Adds the desired attribute to the given element */
function addAttributes(element, props) {
  const { ...rest } = props;
  Object.entries(rest).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

// function to get a random number, extreme included
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// function to manage search filter on a list using a event listner input
// restituisce SOLO keyToMatch passato
const handleSearch = (
  // restituisce SOLO keyToMatch passato
  arrayToFilter,
  keyToMatch,
  keyToShow,
  source,
  listToUpdate,
  itemToCreate,
) => {
  const searched = arrayToFilter.filter((element) => element[keyToMatch]
    .toString()
    .toLowerCase()
    .includes(source.value.toLowerCase()));
  const arraySearched = searched.length
    ? searched.map((item) => createChild(
      itemToCreate,
      '',
      '',
      `${item[keyToMatch]} - ${item[keyToShow]}`,
    ))
    : [createChild(itemToCreate, '', '', 'no result')];

  listToUpdate.replaceChildren(...arraySearched);
};
