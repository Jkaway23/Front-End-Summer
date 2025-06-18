async function ambilDataUserAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    users.forEach((user) => {
      console.log(`${user.name}`);
    });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

export default ambilDataUserAsync;
