function likes(names) {
  const items = names.length;

  return(
    items === 0
      ? 'no one likes this'
      : items === 1
      ? `${names} likes this`
      : items === 2
      ? `${names[0]} and ${names[1]} like this`
      : items === 3
      ? `${names[0]}, ${names[1]} and ${names[2]} like this`
      : `${names[0]}, ${names[1]} and ${items - 2} others like this`
  );
}


likes(['Alex', 'Jacob', 'Mark', 'Max']);