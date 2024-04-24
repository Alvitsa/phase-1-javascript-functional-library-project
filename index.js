// Collection Functions (Arrays or Objects)

// Function to iterate over the collection and apply a callback to each element
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection) === false) {
          break;
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (callback(values[i], i, collection) === false) {
          break;
        }
      }
    }
    return collection;
  }
  
  // Function to produce a new array of values by mapping each value through a transformation function
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(element, idx, collection) {
      result.push(callback(element, idx, collection));
    });
    return result;
  }
  
  // Function to reduce a collection into a single value
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
      acc = values[0];
      startIdx = 1;
    }
    myEach(values.slice(startIdx), function(element, idx, collection) {
      acc = callback(acc, element, collection);
    });
    return acc;
  }
  
  // Function to find the first element in a collection that satisfies a predicate
  function myFind(collection, predicate) {
    let found;
    myEach(collection, function(element, idx, collection) {
      if (predicate(element, idx, collection)) {
        found = element;
        return false; // Exit the loop early once found
      }
    });
    return found;
  }
  
  // Function to filter a collection based on a predicate
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(element, idx, collection) {
      if (predicate(element, idx, collection)) {
        result.push(element);
      }
    });
    return result;
  }
  
  // Function to get the size of a collection
  function mySize(collection) {
    let size = 0;
    myEach(collection, function() {
      size++;
    });
    return size;
  }
  
  // Array Functions
  
  // Function to get the first n elements of an array
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  // Function to get the last n elements of an array
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(Math.max(array.length - n, 0));
  }
  
  // Object Functions
  
  // Function to retrieve all the names of the object's enumerable properties
  function myKeys(object) {
    const keys = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  // Function to return all of the values of the object's properties
  function myValues(object) {
    const values = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }